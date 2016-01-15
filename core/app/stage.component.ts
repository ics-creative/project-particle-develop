import {Component, ViewChild, AfterViewInit} from "angular2/core";
import {DrawingData} from "./drawing-data";

@Component({
  selector: "stage",
  template: `<canvas #myCanvas></canvas>`,
  inputs: ["drawingData"]
})

export class StageComponent implements AfterViewInit {

  @ViewChild("myCanvas") myCanvas;

  private drawingData:DrawingData;
  private context:CanvasRenderingContext2D;

  constructor() {
  }

  ngAfterViewInit() {
    let canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext("2d");

    this.tick();
  }

  tick() {
    requestAnimationFrame(()=> {
      this.tick()
    });

    var ctx = this.context;

    ctx.clearRect(0, 0, 100, 100);
    ctx.beginPath();
    ctx.fillStyle = this.drawingData.color;
    ctx.fillRect(0, 0, this.drawingData.width, this.drawingData.height);
    ctx.closePath();
    ctx.stroke();
  }
}