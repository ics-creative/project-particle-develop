"use strict";

import {Component, ViewChild, AfterViewInit} from "angular2/core";
import {DrawingData} from "../data/data-drawing";
import {ParticleCanvas} from "../particle/particle-canvas";

@Component({
  selector: "stage",
  template: `<canvas #myCanvas id="myCanvas"></canvas>`,
  inputs: ["drawingData"]
})

export class StageComponent implements AfterViewInit {

  @ViewChild("myCanvas") myCanvas:any;

  private drawingData:DrawingData;
  private particleCanvas:ParticleCanvas;

  constructor() {

  }

  public exportSvg():Promise<any> {
    return this.particleCanvas.runExport();
  }

  public toDataURL(type:string, params:string):string {
    return this.particleCanvas.toDataURL(type, params);
  }

  public runExportSP():Promise<any> {
    return this.particleCanvas.runExportSP();
  }

  public runCamera():Promise<any> {
    return this.particleCanvas.runCamera();
  }

  ngAfterViewInit() {
    let canvas = <HTMLCanvasElement> this.myCanvas.nativeElement;
    this.particleCanvas = new ParticleCanvas(canvas, this.drawingData);

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.on("tick", this.handleTick, this);

    canvas.addEventListener("contextmenu", (event:Event)=> {
      this.handleContextMenu(event)
    });
  }

  public getParticleSVGString():string {
    return this.particleCanvas.getSvgString();
  }

  private handleTick() {
    this.particleCanvas.update(this.drawingData);
  }

  private handleContextMenu(event:Event) {
    event.preventDefault();
  }
}