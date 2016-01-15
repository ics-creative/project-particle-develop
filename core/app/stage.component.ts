import {Component, ViewChild, AfterViewInit} from "angular2/core";
import {DrawingData} from "./drawing-data";
import {ParticleCanvas} from "./particle-canvas/particle-canvas";

@Component({
  selector: "stage",
  template: `<canvas #myCanvas></canvas>`,
  inputs: ["drawingData"]
})

export class StageComponent implements AfterViewInit {

  @ViewChild("myCanvas") myCanvas;

  private drawingData:DrawingData;
  private context:CanvasRenderingContext2D;
	private particleCanvas:ParticleCanvas;

  constructor() {
  }

  ngAfterViewInit() {
    let canvas = this.myCanvas.nativeElement;
		this.particleCanvas = new ParticleCanvas(canvas,this.drawingData);
    this.tick();
  }

  tick() {
    requestAnimationFrame(()=> {
      this.tick()
    });

		this.particleCanvas.update(this.drawingData);
  }
}