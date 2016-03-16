import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {EventEmitter} from 'angular2/core';
import {InputRangeComponent} from "./input-range.component";

"use strict";

@Component({
  selector: "particle-property-panel",
  template: `<div class="card">
  <header class="card-header">
    <h3>{{localeData.SP_head}}</h3>
  </header>
  <hr>
  <div class="card-block">
    <input-range
            class="input-range"
            label="{{localeData.SP_startScale}}"
            min="0.0" max="1.0" step="0.01"
            [drawingData]="drawingData"
            targetProperty="startScale">
    </input-range>

    <input-range
            class="input-range"
            label="{{localeData.SP_startScaleVariance}}"
            min="0.0" max="1.0" step="0.01"
            [drawingData]="drawingData"
            targetProperty="startScaleVariance">
    </input-range>


    <input-range
            class="input-range"
            label="{{localeData.SP_endScale}}"
            min="0.0" max="1.0" step="0.01"
            [drawingData]="drawingData"
            targetProperty="finishScale">
    </input-range>

    <input-range
            class="input-range"
            label="{{localeData.SP_endScaleVariance}}"
            min="0.0" max="1.0" step="0.01"
            [drawingData]="drawingData"
            targetProperty="finishScaleVariance">
    </input-range>

    <hr/>

    <input-range
            class="input-range"
            label="{{localeData.SP_lifeSpan}}"
            min="1" max="500" step="1.0"
            [drawingData]="drawingData"
            targetProperty="lifeSpan">
    </input-range>

    <input-range
            class="input-range"
            label="{{localeData.SP_lifeSpanVariance}}"
            min="0" max="500" step="1.0"
            [drawingData]="drawingData"
            targetProperty="lifeSpanVariance">
    </input-range>
  </div>
</div>`,
  inputs: ["drawingData", "shapeIdList"],
  directives: [InputRangeComponent]
})

export class PropertyParticlePanel {
  private drawingData:particlejs.DrawingData;

  constructor(private localeData:LocaleData) {
  }
}
