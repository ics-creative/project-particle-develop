import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {InputRangeComponent} from "./input-range.component";

"use strict";

@Component({
  selector: "color-unit-property-panel",
  template: `<input-range
        class="input-range"
        label="{{localeData.SC_hue}}"
        min="0" max="360" step="1.0"
        [drawingData]="colorData"
        targetProperty="hue">
</input-range>

<div class="row">
  <div class="gradation-box-hue col-xs-9"></div>
</div>

<input-range
        class="input-range"
        label="{{localeData.SC_hueVariance}}"
        min="0" max="360" step="1.0"
        [drawingData]="colorData"
        targetProperty="hueVariance">
</input-range>


<input-range
        class="input-range"
        label="{{localeData.SC_saturation}}"
        min="0" max="100" step="1.0"
        [drawingData]="colorData"
        targetProperty="saturation">
</input-range>
<div class="row">
  <div class="gradation-box-saturation col-xs-9"></div>
</div>

<input-range
        class="input-range"
        label="{{localeData.SC_saturationVariance}}"
        min="0" max="100" step="1.0"
        [drawingData]="colorData"
        targetProperty="saturationVariance">
</input-range>

<input-range
        class="input-range"
        label="{{localeData.SC_luminance}}"
        min="0" max="100" step="1.0"
        [drawingData]="colorData"
        targetProperty="luminance">
</input-range>
<div class="row">
  <div class="gradation-box-luminance col-xs-9"></div>
</div>


<input-range
        class="input-range"
        label="{{localeData.SC_luminanceVariance}}"
        min="0" max="100" step="1.0"
        [drawingData]="colorData"
        targetProperty="luminanceVariance">
</input-range>`,
  inputs: ["colorData"],
  directives: [InputRangeComponent]
})
export class PropertyColorUnit {
  private colorData:particlejs.ColorData;

  constructor(private localeData:LocaleData){
  }
}
