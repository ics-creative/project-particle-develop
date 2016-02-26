"use strict";

import {Component} from "angular2/core";
import {EventEmitter} from 'angular2/core';
import {ElementRef} from "angular2/core";

@Component({
  selector: "small-io-box",
  templateUrl: "app/components-html/small-io-box.html",
  inputs: ["drawingData"],
  events: [
    "exportPngEvent",
    "importCameraEvent"
  ]
})

export class SmallIOBox {
  private exportPngEvent = new EventEmitter();
  private importCameraEvent = new EventEmitter();

  private drawingData:effects.DrawingData;
  private element:ElementRef;

  exportPng() {
    this.exportPngEvent.emit(null);
  }

  importCamera() {
    this.importCameraEvent.emit(null);
  }

  constructor(element:ElementRef) {
    this.element = element;
  }
}