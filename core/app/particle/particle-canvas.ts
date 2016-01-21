///<reference path="../../libs-typescript/createjs/createjs.d.ts"/>
"use strict";

import {DrawingData} from "../data/drawing-data";
import {Viewport} from "../enum/view-port";
import {CanvasMargin} from "../enum/canvas-margin";
import {ParticleEmitter} from "./particle-emitter";
import {ParticleExporter} from "./particle-exporter";
import {PartcicleImageImporter} from "./particle-image-importer";
import {ParticleCaptureImageLayer} from "./particle-capture-image-layer";
import {Ruler} from "./particle-ruler";

export class ParticleCanvas {

  private data:DrawingData;

  private _background:createjs.Shape;
  private _captureImageLayer:ParticleCaptureImageLayer;
  private _canvas:HTMLCanvasElement;
  private _stage:createjs.Stage;
  private _canvasContainer:createjs.Container;
  private _backgroundColorCommand:any;
  private _backgroundSize:any;
  private _particleEmitter:ParticleEmitter;
  private _particleExporter:ParticleExporter;
  private _partcileImageImporter:PartcicleImageImporter;
  private _ruler:Ruler;
  /** 座布団 */
  private _outerZabuton:createjs.Shape = new createjs.Shape();

  constructor(canvas:any, data:DrawingData) {

    this.data = data;
    this._canvas = canvas;

    this._canvas.width = data.width;
    this._canvas.height = data.height;

    this._stage = new createjs.Stage(this._canvas);

    this._canvasContainer = new createjs.Container();
    this._stage.addChild(this._canvasContainer);


    //  キャンバスより後ろ
    this._background = new createjs.Shape();
    this._backgroundColorCommand = this._background.graphics.beginFill("gray").command;
    this._backgroundSize = this._background.graphics.drawRect(0, 0, data.width, data.height).command;


    this._backgroundColorCommand.style = data.bgColor;
    this._backgroundSize.w = data.width;
    this._backgroundSize.h = data.height;

    this._canvasContainer.addChild(this._background);

    this._captureImageLayer = new ParticleCaptureImageLayer();
    this._canvasContainer.addChild(this._captureImageLayer);

    this._particleEmitter = new ParticleEmitter();
    this._canvasContainer.addChild(this._particleEmitter.container);

    this._particleExporter = new ParticleExporter(this._particleEmitter.container);

    this._partcileImageImporter = new PartcicleImageImporter();

    // 座布団
    this._stage.addChild(this._outerZabuton);

    // ルーラーは最前面
    this._ruler = new Ruler();
    this._ruler.setSize(data.width, data.height);
    this._stage.addChild(this._ruler.container);

    // リサイズイベント
    this.resizeHandler();
    window.addEventListener("resize", () => this.resizeHandler());
  }

  public getSVGString():string {
    return this._particleExporter.getSVGString();
  }

  public runExport():Promise<any> {
    return this._particleExporter.runExport(this.data.width, this.data.height);
  }

  public  runExportSP():Promise<any> {
    return this._particleExporter.runExportSP(this._canvas);
  }

  public runCamera():Promise<any> {
    let canvasWidth:number = (<HTMLCanvasElement>this._stage.canvas).width;
    let canvasHeight:number = (<HTMLCanvasElement>this._stage.canvas).height;
    return this._partcileImageImporter.getCapture(canvasWidth, canvasHeight).then(
        (imageData) => this.insertCaptureToStage(imageData)
    );
  }

  /**
   * Stageにキャプチャー画像を挿入します。
   */
  private insertCaptureToStage(imageData:string):void {
    this._captureImageLayer.addImageFromImageData(imageData);
    this._stage.update();
  }

  public toDataURL(type:string, params:string):string {
    this._canvasContainer.cache(0, 0, this.data.width, this.data.height);
    var capture = this._canvasContainer.cacheCanvas;
    var dataURL = capture.toDataURL(type, params);
    this._canvasContainer.uncache();

    return dataURL;
  }

  /**
   * リサイズのイベント処理
   */
  private resizeHandler():void {

    var canvasWidth:number = innerWidth;
    var canvasHeight:number = innerHeight;

    if (innerWidth > Viewport.sm) {
      canvasHeight -= CanvasMargin.TOP_DESKTOP;
      canvasWidth -= CanvasMargin.RIGHT_DESKTOP;
    }
    else {
      canvasHeight -= CanvasMargin.TOP_MOBILE;
      canvasWidth -= CanvasMargin.RIGHT_MOBILE;
    }

    var palletW = Number(this.data.width) >> 0;
    var palletH = Number(this.data.height) >> 0;

    let canvasX = Math.floor((canvasWidth - palletW) / 2);
    let canvasY = Math.floor((canvasHeight - palletH) / 2);

    //  ルーラーなどのセンタリング
    let canvasPoint = new createjs.Point(canvasX, canvasY);

    this._outerZabuton.graphics
        .clear()
        .beginFill("rgba(32, 32, 32, 0.7)")
        .drawRect(0, 0, canvasWidth, canvasY)
        .drawRect(0, canvasY, canvasX, palletH)
        .drawRect(canvasX + palletW, canvasY, canvasX, palletH)
        .drawRect(0, canvasY + palletH, canvasWidth, canvasY)
        .endFill();

    this._canvasContainer.x = this._ruler.container.x = canvasPoint.x;
    this._canvasContainer.y = this._ruler.container.y = canvasPoint.y;

    // ステージのサイズをwindowのサイズに変更
    (<HTMLCanvasElement>this._stage.canvas).width = canvasWidth;
    (<HTMLCanvasElement>this._stage.canvas).height = canvasHeight;
  }

  public update(data:DrawingData):void {

    var palletW = Number(this.data.width) >> 0;
    var palletH = Number(this.data.height) >> 0;

    if (palletW != this._backgroundSize.w
        || palletH != this._backgroundSize.h
        || this._backgroundColorCommand.style != data.bgColor) {
      this._backgroundColorCommand.style = data.bgColor;
      this._backgroundSize.w = palletW;
      this._backgroundSize.h = palletH;
      this._ruler.setSize(palletW, palletH);
      this.resizeHandler();
    }

    this._particleEmitter.update(data);
    this._ruler.update();
    this._stage.update();
  }
}