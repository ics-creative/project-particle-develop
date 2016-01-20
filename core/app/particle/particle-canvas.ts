///<reference path="../../typings/tsd.d.ts" />

import {DrawingData} from "../drawing-data";
import {Viewport} from "../enum/view-port";
import {CanvasMargin} from "../enum/canvas-margin";
import {ParticleEmitter} from "./particle-emitter";
import {ParticleExporter} from "./particle-exporter";
import {PartcicleImageImporter} from "./particle-image-importer";
import {ParticleCaptureImageLayer} from "./particle-capture-image-layer";
import {Ruler} from "./particle-ruler";

export class ParticleCanvas {

  private background:createjs.Shape;
  private captureImageLayer:ParticleCaptureImageLayer;
  private canvas:HTMLCanvasElement;
  private stage:createjs.Stage;

  public backgroundColorCommand:any;
  public backgroundSize:any;

  private particleEmitter:ParticleEmitter;

  public particleExporter:ParticleExporter;

  public partcileImageImporter:PartcicleImageImporter;

  private ruler:Ruler;

  constructor(canvas:any, data:DrawingData) {

    let canvasPoint = new createjs.Point(100,100);

    this.canvas = canvas;

    this.canvas.width = data.width;
    this.canvas.height = data.height;

    this.stage = new createjs.Stage(this.canvas);

    //  キャンバスより後ろ
    this.background = new createjs.Shape();
    this.backgroundColorCommand = this.background.graphics.beginFill("gray").command;
    this.backgroundSize = this.background.graphics.drawRect(0, 0, data.width, data.height).command;

    this.ruler = new Ruler(this.stage);
    this.ruler.setSize(data.width, data.height);

    this.stage.addChild(this.ruler.container);

    this.ruler.container.x = canvasPoint.x;
    this.ruler.container.y = canvasPoint.y;

    this.backgroundColorCommand.style = data.bgColor;
    this.backgroundSize.w = data.width;
    this.backgroundSize.h = data.height;

    this.backgroundSize.x = canvasPoint.x;
    this.backgroundSize.y = canvasPoint.y;

    this.stage.addChild(this.background);

    this.captureImageLayer = new ParticleCaptureImageLayer();
    this.captureImageLayer.x = canvasPoint.x;
    this.captureImageLayer.y = canvasPoint.y;

    this.stage.addChild(this.captureImageLayer);

    this.particleEmitter = new ParticleEmitter();
    this.particleEmitter.container.x = canvasPoint.x;
    this.particleEmitter.container.y = canvasPoint.y;
    this.stage.addChild(this.particleEmitter.container);

    this.particleExporter = new ParticleExporter(this.stage);

    this.partcileImageImporter = new PartcicleImageImporter();

    // リサイズイベント
    this.resizeHandler();
    window.addEventListener("resize", () => this.resizeHandler());
  }

  getSVGString():string {
    return this.particleExporter.getSVGString();
  }

  runExport():Promise<any> {
    return this.particleExporter.runExport();
  }

  runExportSP():Promise<any> {
    return this.particleExporter.runExportSP(this.canvas);
  }

  runCamera():Promise<any> {
    let canvasWidth:number = this.stage.canvas.width;
    let canvasHeight:number = this.stage.canvas.height;
    return this.partcileImageImporter.getCapture(canvasWidth, canvasHeight).then(
        (imageData) => this.insertCaptureToStage(imageData),
        () => this.insertDummyImageToStage()
    );
  }

  /**
   * Stageにキャプチャー画像を挿入します。
   */
  private insertCaptureToStage(imageData:string):void {
    this.captureImageLayer.addImageFromImageData(imageData);
    this.stage.update();
  }

  private insertDummyImageToStage():void {
    this.captureImageLayer.addImageFromURL("http://ics-web.jp/imgs/works/pollenmap.jpg");
    this.stage.update();
  }

  /**
   * リサイズのイベント処理
   */
  private resizeHandler():void {

    var canvasWidth:number;
    var canvasHeight:number;

    let windowWidth:number = window.innerWidth;
    let windowHeight:number = window.innerHeight;

    canvasWidth = windowWidth;
    canvasHeight = windowHeight;

    if (windowWidth > Viewport.sm) {
      canvasHeight -= CanvasMargin.TOP_DESKTOP;
      canvasWidth -= CanvasMargin.RIGHT_DESKTOP;
    }
    else {
      canvasHeight -= CanvasMargin.TOP_MOBILE;
      canvasWidth -= CanvasMargin.RIGHT_MOBILE;
    }

    // ステージのサイズをwindowのサイズに変更
    this.stage.canvas.width = canvasWidth;
    this.stage.canvas.height = canvasHeight;
  }

  update(data:DrawingData) {

    if (data.width != this.backgroundSize.w || data.height != this.backgroundSize.h ||
        this.backgroundColorCommand.style != data.bgColor) {
      this.backgroundColorCommand.style = data.bgColor;
      this.backgroundSize.w = data.width;
      this.backgroundSize.h = data.height;
      this.ruler.setSize(data.width,data.height);
    }

    this.particleEmitter.update(data);
    this.ruler.update();
    this.stage.update();
  }
}