import {Component} from "angular2/core";
import {DrawingData} from "../data/drawing-data";
import {EventEmitter} from 'angular2/core';
import {ShapeData} from "../data/shape-data";
import {InputRangeComponent} from "./input-range.component";

@Component({
  selector: "particle-property-panel",
  templateUrl: "app/components/template/property-particle.html",
  inputs: ["drawingData", "shapeIdList"],
  directives: [InputRangeComponent]
})

export class PropertyParticlePanel {
  private drawingData:DrawingData;

  constructor() {
  }
}
