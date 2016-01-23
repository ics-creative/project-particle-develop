"use strict";

import {Component} from "angular2/core";
import {DrawingData} from "../data/data-drawing";
import {EventEmitter} from 'angular2/core';
import {ElementRef} from "angular2/core";

@Component({
  selector: "mobile-io-box",
  templateUrl: "app/components/template/mobile-io-box.html",
  inputs: ["drawingData"],
  events: [
    "exportPngEvent",
    "importCameraEvent"
  ]
})

export class MobileIOBox {
  private exportPngEvent = new EventEmitter();
  private importCameraEvent = new EventEmitter();

  private drawingData:DrawingData;
  private element:ElementRef;

  exportPng() {
    this.exportPNGEvent.emit(null);
  }

  importCamera() {
    this.importCameraEvent.emit(null);
  }

  constructor(element:ElementRef) {
    this.element = element;
  }
}