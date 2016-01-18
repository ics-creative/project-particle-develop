import {Component} from "angular2/core";
import {DrawingData} from "./drawing-data";
import {EventEmitter} from 'angular2/core';
import {ElementRef} from "angular2/core";

const template = `
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">SP Canvas Settings</h3>
  </div>
  <div class="panel-body">
    <button class="btn btn-primary btn-sm btn-block visible-xs" (click)="importCamera()">画像を読み込む</button>
    <button class="btn btn-primary btn-sm btn-block visible-xs" (click)="exportPNG()">PNG保存</button>
  </div>
</div>
`;

@Component({
  selector: "sp-property-panel",
  template: template,
  inputs: ["drawingData"],
  events: [
    "exportPNGEvent",
    "importCameraEvent"
  ]
})

export class SPPropertyPanel {
  private exportPNGEvent = new EventEmitter();
  private importCameraEvent = new EventEmitter();

  private drawingData:DrawingData;
  private element:ElementRef;

  exportPNG() {
    this.exportPNGEvent.emit(null);
  }

  importCamera() {
    this.importCameraEvent.emit(null);
  }

  constructor(element:ElementRef) {
    this.element = element;
  }
}
