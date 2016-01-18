import {Component, ViewChild, AfterViewInit} from "../../node_modules/angular2/core.d";
import {DrawingData} from "./../data/drawing-data";
import {ParticleCanvas} from "../particle/particle-canvas";

@Component({
  selector: "stage",
  template: `<canvas #myCanvas></canvas>`,
  inputs: ["drawingData"]
})

export class StageComponent implements AfterViewInit {

  @ViewChild("myCanvas") myCanvas;

  private drawingData:DrawingData;
  private particleCanvas:ParticleCanvas;

  constructor() {
  }

  exportSVG = ():Promise<any> => {
    return this.particleCanvas.runExport();
  }

  runExportSP = ():Promise<any> => {
    return this.particleCanvas.runExportSP();
  }

  runCamera = ():Promise<any> => {
    return this.particleCanvas.runCamera();
  }

  ngAfterViewInit() {
    let canvas = this.myCanvas.nativeElement;
    this.particleCanvas = new ParticleCanvas(canvas, this.drawingData);
    this.tick();
  }

  getParticleSVGString():string {
    return this.particleCanvas.getSVGString();
  }

  tick() {
    requestAnimationFrame(()=> {
      this.tick()
    });

    this.particleCanvas.update(this.drawingData);
  }
}