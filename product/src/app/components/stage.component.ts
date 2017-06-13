import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {ParticleCanvas} from '../particle/particle-canvas';

@Component({
  selector: 'app-stage',
  template: `
    <!--
  <div  class="hidden-xs">
    <ul class="nav navbar-nav">
      <li>
        <a (click)="onResumeClick()" role="button"><i class="fa fa-play "></i>再生</a>
      </li>
      <li>
        <a (click)="onPauseClick()" role="button"><i class="fa fa-pause"></i>停止</a>
      </li>
    </ul>
  </div>
    -->
    <canvas #myCanvas id="myCanvas"></canvas>`
})

export class StageComponent implements AfterViewInit {

  @ViewChild('myCanvas') myCanvas: any;

  @Input() private drawingData: particlejs.DrawingData;
  private particleCanvas: ParticleCanvas;

  constructor() {

  }

  private onResumeClick() {
    this.particleCanvas.resume();
  }

  private onPauseClick() {
    this.particleCanvas.pause();
  }

  public exportSvg(): Promise<any> {
    return this.particleCanvas.runExport();
  }

  public toDataURL(type: string, params: string): string {
    return this.particleCanvas.toDataURL(type, params);
  }

  public runExportSP(): Promise<any> {
    return this.particleCanvas.runExportSP();
  }

  public runCamera(): Promise<any> {
    return this.particleCanvas.runCamera();
  }

  ngAfterViewInit() {
    const canvas        = <HTMLCanvasElement> this.myCanvas.nativeElement;
    this.particleCanvas = new ParticleCanvas(canvas, this.drawingData);

    createjs.Ticker.framerate  = 60;
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.on('tick', this.handleTick, this);

    canvas.addEventListener('contextmenu', (event: Event) => {
      this.handleContextMenu(event);
    });
  }

  public getParticleSvgString(): string {
    return this.particleCanvas.getSvgString();
  }

  private handleTick() {
    this.particleCanvas.update(this.drawingData);
  }

  private handleContextMenu(event: Event) {
    event.preventDefault();
  }
}
