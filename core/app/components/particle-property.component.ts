/**
 * Created by nyamogera on 2016/01/20.
 */
import {Component} from "angular2/core";
import {DrawingData} from "../data/drawing-data";
import {EventEmitter} from 'angular2/core';
import {ShapeData} from "../data/shape-data";
import {InputRangeComponent} from "./input-range.component";

@Component({
  selector: "particle-property-panel",
  templateUrl: "app/components/template/particle-property.html",
  inputs: ["drawingData", "shapeIdList"],
  directives: [InputRangeComponent]
})

export class ParticlePropertyPanel {
  private drawingData:DrawingData;

  constructor() {
  }
}
