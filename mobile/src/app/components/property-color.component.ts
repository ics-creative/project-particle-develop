import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {PropertyColorUnit} from "./property-color-unit.component";
import {InputRangeComponent} from "./input-range.component";
import {FORM_DIRECTIVES} from "angular2/common";
import {NgForm}    from 'angular2/common';

"use strict";

interface TestObject {
  name:string;
  value:number;
}

@Component({
  selector: "color-property-panel",
  template: `<div class="card">
  <header class="card-header">
    <h3>{{localeData.SC_head_start}}</h3>
  </header>
  <div class="card-block">
    <color-unit-property-panel [colorData]="drawingData.startColor"></color-unit-property-panel>
    <input-range
            class="input-range"
            label="{{localeData.SC_startAlpha}}"
            min="0.0" max="1.0" step="0.01"
            [drawingData]="drawingData"
            targetProperty="startAlpha">
    </input-range>
    <input-range
            class="input-range"
            label="{{localeData.SC_startAlphaVariance}}"
            min="0.0" max="1.0" step="0.01"
            [drawingData]="drawingData"
            targetProperty="startAlphaVariance">
    </input-range>
  </div>
</div>
<hr>
<div class="card">
  <header class="card-header">
    <h3>{{localeData.SC_head_end}}</h3>
  </header>
  <div class="card-block">
    <input-range
            class="input-range"
            label="{{localeData.SC_endAlpha}}"
            min="0.0" max="1.0" step="0.01"
            [drawingData]="drawingData"
            targetProperty="finishAlpha">
    </input-range>
    <input-range
            class="input-range"
            label="{{localeData.SC_endAlphaVariance}}"
            min="0.0" max="1.0" step="0.01"
            [drawingData]="drawingData"
            targetProperty="finishAlphaVariance">
    </input-range>
  </div>
</div>
<hr>
<div class="card">
  <header class="card-header">
    <h3>{{localeData.SC_head_alphaCurve}}</h3>
  </header>
  <div class="card-block">
    <select [(ngModel)]="drawingData.alphaCurveType" class="topcoat-select">
      <option *ngFor="#o of objArray" [value]="o.value">{{o.name}}</option>
    </select>
  </div>
</div>
<hr>
<div class="card">
  <header class="card-header">
    <h3>{{localeData.SC_head_blendMode}}</h3>
  </header>
  <div class="card-block">
    <label class="topcoat-checkbox">
      <input type="checkbox" [(ngModel)]="drawingData.blendMode"/>
      Use lighter
    </label>
  </div>
</div>
`,
  inputs: ["drawingData"],
  directives: [PropertyColorUnit, InputRangeComponent, FORM_DIRECTIVES]
})

export class PropertyColorPanel {
  private drawingData:particlejs.DrawingData;
  private objArray:TestObject[];

  constructor(private localeData:LocaleData) {
    this.objArray = [
      {name: 'Normal', value: particlejs.AlphaCurveType.Normal},
      {name: 'Random', value: particlejs.AlphaCurveType.Random}
    ];
  }
}
