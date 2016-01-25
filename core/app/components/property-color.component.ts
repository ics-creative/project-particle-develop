"use strict";

import {Component} from "angular2/core";
import {ColorData} from "../data/data-color";
import {DrawingData} from "../data/data-drawing";
import {PropertyColorUnit} from "./property-color-unit.component";
import {InputRangeComponent} from "./input-range.component";
import {FORM_DIRECTIVES} from "angular2/common";
import {AlphaCurveType} from "../enum/alpha-curve-type";
import {NgForm}    from 'angular2/common';

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

  constructor() {
    this.objArray = [
      {name: 'Normal', value: AlphaCurveType.Normal},
      {name: 'Random', value: AlphaCurveType.Random}
    ];
  }
}
