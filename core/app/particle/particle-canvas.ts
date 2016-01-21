///<reference path="../../libs-typescript/createjs/createjs.d.ts"/>
import {DrawingData} from "../data/drawing-data";
import {Viewport} from "../enum/view-port";
import {CanvasMargin} from "../enum/canvas-margin";
import {ParticleEmitter} from "./particle-emitter";
import {ParticleExporter} from "./particle-exporter";
import {PartcicleImageImporter} from "./particle-image-importer";
import {ParticleCaptureImageLayer} from "./particle-capture-image-layer";
import {Ruler} from "./particle-ruler";

"use strict";
export class ParticleCanvas {

  private background:createjs.Shape;
  private captureImageLayer:ParticleCaptureImageLayer;
  private canvas:HTMLCanvasElement;
  private stage:createjs.Stage;
  private canvasContainer:createjs.Container;

  public backgroundColorCommand:any;
  public backgroundSize:any;

  private particleEmitter:ParticleEmitter;

  public particleExporter:ParticleExporter;

  public partcileImageImporter:PartcicleImageImporter;
  public data:DrawingData;

  private ruler:Ruler;
  /** 座布団 */
  private _outerZabuton:createjs.Shape = new createjs.Shape();

  constructor(canvas:any, data:DrawingData) {

    this.data = data;
    this.canvas = canvas;

    this.canvas.width = data.width;
    this.canvas.height = data.height;

    this.stage = new createjs.Stage(this.canvas);

    this.canvasContainer = new createjs.Container();
    this.stage.addChild(this.canvasContainer);


    //  キャンバスより後ろ
    this.background = new createjs.Shape();
    this.backgroundColorCommand = this.background.graphics.beginFill("gray").command;
    this.backgroundSize = this.background.graphics.drawRect(0, 0, data.width, data.height).command;


    this.backgroundColorCommand.style = data.bgColor;
    this.backgroundSize.w = data.width;
    this.backgroundSize.h = data.height;

    this.canvasContainer.addChild(this.background);

    this.captureImageLayer = new ParticleCaptureImageLayer();
    this.canvasContainer.addChild(this.captureImageLayer);

    this.particleEmitter = new ParticleEmitter();
    this.canvasContainer.addChild(this.particleEmitter.container);

    this.particleExporter = new ParticleExporter(this.particleEmitter.container);

    this.partcileImageImporter = new PartcicleImageImporter();

    // 座布団
    this.stage.addChild(this._outerZabuton);

    // ルーラーは最前面
    this.ruler = new Ruler(this.stage);
    this.ruler.setSize(data.width, data.height);
    this.stage.addChild(this.ruler.container);

    // リサイズイベント
    this.resizeHandler();
    window.addEventListener("resize", () => this.resizeHandler());
  }

  getSVGString():string {
    return this.particleExporter.getSVGString();
  }

  runExport():Promise<any> {
    return this.particleExporter.runExport(this.data.width, this.data.height);
  }

  runExportSP():Promise<any> {
    return this.particleExporter.runExportSP(this.canvas);
  }

  runCamera():Promise<any> {
    let canvasWidth:number = (<HTMLCanvasElement>this.stage.canvas).width;
    let canvasHeight:number = (<HTMLCanvasElement>this.stage.canvas).height;
    return this.partcileImageImporter.getCapture(canvasWidth, canvasHeight).then(
        (imageData) => this.insertCaptureToStage(imageData)
    );
  }

  /**
   * Stageにキャプチャー画像を挿入します。
   */
  private insertCaptureToStage(imageData:string):void {
    this.captureImageLayer.addImageFromImageData(imageData);
    this.stage.update();
  }

  toDataURL(type:string, params:string):string {
    this.canvasContainer.cache(0, 0, this.data.width, this.data.height);
    var capture = this.canvasContainer.cacheCanvas;
    var dataURL = capture.toDataURL(type, params);
    this.canvasContainer.uncache();

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

    this.canvasContainer.x = this.ruler.container.x = canvasPoint.x;
    this.canvasContainer.y = this.ruler.container.y = canvasPoint.y;

    // ステージのサイズをwindowのサイズに変更
    (<HTMLCanvasElement>this.stage.canvas).width = canvasWidth;
    (<HTMLCanvasElement>this.stage.canvas).height = canvasHeight;
  }

  public update(data:DrawingData):void {

    var palletW = Number(this.data.width) >> 0;
    var palletH = Number(this.data.height) >> 0;

    if (palletW != this.backgroundSize.w
        || palletH != this.backgroundSize.h
        || this.backgroundColorCommand.style != data.bgColor) {
      this.backgroundColorCommand.style = data.bgColor;
      this.backgroundSize.w = palletW;
      this.backgroundSize.h = palletH;
      this.ruler.setSize(palletW, palletH);
      this.resizeHandler();
    }

    this.particleEmitter.update(data);
    this.ruler.update();
    this.stage.update();
  }
}