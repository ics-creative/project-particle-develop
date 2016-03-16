"use strict";

import {Component} from "angular2/core";
import {EventEmitter} from 'angular2/core';
import {ElementRef} from "angular2/core";

@Component({
  selector: "small-io-box",
  template: `<ul class="row hidden-md-up">
  <li>
    <a class="btn btn-primary" data-toggle="modal" data-target="#smallParticleTemplate"><i class="fa fa-cloud"></i></a>
  </li>
  <li>
    <a class="btn btn-primary" (click)="importCamera()"><i class="fa fa-camera"></i></a>
  </li>
  <li>
    <a class="btn btn-primary" (click)="exportPng()"><i class="fa fa-file-image-o"></i></a>
  </li>
</ul>
`,
  inputs: ["drawingData"],
  events: [
    "exportPngEvent",
    "importCameraEvent"
  ]
})

export class SmallIOBox {
  private exportPngEvent = new EventEmitter();
  private importCameraEvent = new EventEmitter();

  private drawingData:particlejs.DrawingData;
  private element:ElementRef;

  exportPng() {
    this.exportPngEvent.emit(null);
  }

  importCamera() {
    alert("あああああ");

    this.importCameraEvent.emit(null);
  }

  constructor(element:ElementRef) {
    this.element = element;
  }
}