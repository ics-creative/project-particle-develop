"use strict";

import {Component} from "angular2/core";
import {DrawingData} from "../data/data-drawing";
import {EventEmitter} from 'angular2/core';
import {ShapeData} from "../data/data-shape";
import {InputRangeComponent} from "./input-range.component";

@Component({
  selector: "particle-property-panel",
  templateUrl: "app/components-html/property-particle.html",
  inputs: ["drawingData", "shapeIdList"],
  directives: [InputRangeComponent]
})

export class PropertyParticlePanel {
  private drawingData:DrawingData;

  constructor() {
  }
}
