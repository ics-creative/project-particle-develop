import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {EventEmitter} from 'angular2/core';
import {DrawingData} from "../particle-system/src/data/data-drawing";
import {ShapeData} from "../particle-system/src/data/data-shape";
import {InputRangeComponent} from "./input-range.component";

"use strict";

@Component({
  selector: "particle-property-panel",
  templateUrl: "app/components-html/property-particle.html",
  inputs: ["drawingData", "shapeIdList"],
  directives: [InputRangeComponent]
})

export class PropertyParticlePanel {
  private drawingData:DrawingData;

  constructor(private localeData:LocaleData) {
  }
}
