import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {DrawingData} from "../particle-system/src/data/data-drawing";
import {EventEmitter} from 'angular2/core';
import {ShapeData} from "../particle-system/src/data/data-shape";
import {InputRangeComponent} from "./input-range.component";

"use strict";

@Component({
  selector: "emitter-property-panel",
  templateUrl: "app/components-html/property-emitter.html",
  inputs: ["drawingData", "shapeIdList"],
  directives: [InputRangeComponent]
})

export class PropertyEmitterPanel {
  private drawingData:DrawingData;

  constructor(private localeData:LocaleData) {
  }
}
