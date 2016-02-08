import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {ColorData} from "../particle-system/src/data/data-color";
import {DrawingData} from "../particle-system/src/data/data-drawing";
import {PropertyColorUnit} from "./property-color-unit.component";
import {InputRangeComponent} from "./input-range.component";
import {FORM_DIRECTIVES} from "angular2/common";
import {AlphaCurveType} from "../particle-system/src/enum/alpha-curve-type";
import {NgForm}    from 'angular2/common';

"use strict";

interface TestObject {
  name:string;
  value:number;
}

@Component({
  selector: "color-property-panel",
  templateUrl: "app/components-html/property-color.html",
  inputs: ["drawingData"],
  directives: [PropertyColorUnit, InputRangeComponent, FORM_DIRECTIVES]
})

export class PropertyColorPanel {
  private drawingData:DrawingData;
  private objArray:TestObject[];

  constructor(private localeData:LocaleData) {
    this.objArray = [
      {name: 'Normal', value: AlphaCurveType.Normal},
      {name: 'Random', value: AlphaCurveType.Random}
    ];
  }
}
