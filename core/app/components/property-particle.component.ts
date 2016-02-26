import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {EventEmitter} from 'angular2/core';
import {InputRangeComponent} from "./input-range.component";

"use strict";

@Component({
  selector: "particle-property-panel",
  templateUrl: "app/components-html/property-particle.html",
  inputs: ["drawingData", "shapeIdList"],
  directives: [InputRangeComponent]
})

export class PropertyParticlePanel {
  private drawingData:effects.DrawingData;

  constructor(private localeData:LocaleData) {
  }
}
