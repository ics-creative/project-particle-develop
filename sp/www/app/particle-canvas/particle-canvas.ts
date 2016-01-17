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

    this.particleEmitter = new ParticleEmitter();
    this.stage.addChild(this.particleEmitter.container);

    this.captureImageLayer = new ParticleCaptureImageLayer();
    this.stage.addChild(this.captureImageLayer);

    this.particleExporter = new ParticleExporter(this.stage);

    this.partcileImageImporter = new PartcicleImageImporter();
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
    this.captureImageLayer.addImage(imageData);
//    this.captureImageLayer.addImage("http://lorempixel.com/800/700/cats/");
    this.stage.update();
  }

  private insertDummyImageToStage():void {
    this.captureImageLayer.addImage("http://lorempixel.com/800/700/cats/");
    this.stage.update();
  }

  update = (data:DrawingData) => {
    this.backgroundColorCommand.style = data.bgColor;
    this.backgroundSize.w = data.width;
    this.backgroundSize.h = data.height;

    this.particleEmitter.update(data);

    this.stage.update();
  }
}