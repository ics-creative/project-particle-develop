import { LocaleData } from "../i18n/locale-data";
import { Component } from "@angular/core";
import { InputRangeComponent } from "./input-range.component";

"use strict";

@Component({
  selector:"particle-property-panel",
  templateUrl:"app/components-html/property-particle.html",
  inputs:["drawingData", "shapeIdList"]
})

export class PropertyParticlePanel {
  private drawingData:particlejs.DrawingData;

  constructor(private localeData:LocaleData) {
  }
}
