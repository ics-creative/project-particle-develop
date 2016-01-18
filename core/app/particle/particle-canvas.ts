///<reference path="../../typings/tsd.d.ts" />

import {DrawingData} from "../drawing-data";
import {ParticleEmitter} from "./particle-emitter";
import {ParticleExporter} from "./particle-exporter";
import {PartcicleImageImporter} from "./particle-image-importer";
import {ParticleCaptureImageLayer} from "./particle-capture-image-layer";

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

  constructor(canvas:any, data:DrawingData) {

    this.canvas = canvas;

    this.canvas.width = data.width;
    this.canvas.height = data.height;

    this.stage = new createjs.Stage(this.canvas);

    //  キャンバスより後ろ
    this.background = new createjs.Shape();
    this.backgroundColorCommand = this.background.graphics.beginFill("gray").command;
    this.backgroundSize = this.background.graphics.drawRect(0, 0, data.width, data.height).command;
    this.stage.addChild(this.background);

    this.captureImageLayer = new ParticleCaptureImageLayer();
    this.stage.addChild(this.captureImageLayer);

    this.particleEmitter = new ParticleEmitter();
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

  runExport = ():Promise<any> => {
    return this.particleExporter.runExport();
  }

  runExportSP():Promise<any> {
    return this.particleExporter.runExportSP(this.canvas);
  }

  runCamera():Promise<any> {
    return this.partcileImageImporter.getCapture().then(
      (imageData) => this.insertCaputureToStage(imageData),
      () => this.insertDummyImageToStage()
    );
  }

  /**
   * Stageにキャプチャー画像を挿入します。
   */
  private insertCaputureToStage(imageData:string):void {
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
    var canvasWidth:number = window.innerWidth - 400;
    var canvasHeight:number = window.innerHeight - 50;
    // ステージのサイズをwindowのサイズに変更
    this.stage.canvas.width = canvasWidth;
    this.stage.canvas.height = canvasHeight;
  }

  update = (data:DrawingData) => {
    this.backgroundColorCommand.style = data.bgColor;
    this.backgroundSize.w = data.width;
    this.backgroundSize.h = data.height;

    this.particleEmitter.update(data);

    this.stage.update();
  }
}