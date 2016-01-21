import {Component, ViewChild, AfterViewInit} from "angular2/core";
import {DrawingData} from "../data/drawing-data";
import {ParticleCanvas} from "../particle/particle-canvas";

@Component({
  selector: "stage",
  template: `<canvas #myCanvas id="myCanvas"></canvas>`,
  inputs: ["drawingData"]
})

export class StageComponent implements AfterViewInit {

  @ViewChild("myCanvas") myCanvas;

  private drawingData:DrawingData;
  private particleCanvas:ParticleCanvas;

  constructor() {

  }

  exportSVG():Promise<any> {
    return this.particleCanvas.runExport();
  }

  toDataURL(type:string,params:string):string{
    return this.particleCanvas.toDataURL(type,params);
  }

  runExportSP():Promise<any> {
    return this.particleCanvas.runExportSP();
  }

  runCamera():Promise<any> {
    return this.particleCanvas.runCamera();
  }

  ngAfterViewInit() {
    let canvas = this.myCanvas.nativeElement;
    this.particleCanvas = new ParticleCanvas(canvas, this.drawingData);

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.on("tick", this.handleTick, this);
  }

  getParticleSVGString():string {
    return this.particleCanvas.getSVGString();
  }

  private handleTick() {
    this.particleCanvas.update(this.drawingData);
  }
}