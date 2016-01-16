///<reference path="../../typings/tsd.d.ts" />

import {DrawingData} from "../drawing-data";
import {ParticleEmitter} from "./particle-emitter";
import {ParticleExporter} from "./particle-exporter";
export class ParticleCanvas {


	private background:createjs.Shape;
	private canvas:HTMLCanvasElement;
	private stage:createjs.Stage;

	public backgroundColorCommand:any;
	public backgroundSize:any;

  private particleEmitter:ParticleEmitter;

  public particleExporter:ParticleExporter;

	constructor(canvas:any,data:DrawingData) {

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

    this.particleExporter = new ParticleExporter(this.stage);

	}
  getSVGString() : string {
    return this.particleExporter.getSVGString();
  }
  runExport = () : Promise =>{
    return this.particleExporter.runExport();
  }

	update = (data:DrawingData) => {
		this.backgroundColorCommand.style = data.bgColor;

		this.backgroundSize.w = data.width;
		this.backgroundSize.h = data.height;

    this.particleEmitter.update(data);

		this.stage.update();
	}
}