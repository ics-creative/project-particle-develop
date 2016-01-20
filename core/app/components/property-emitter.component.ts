import {Component} from "angular2/core";
import {DrawingData} from "../data/drawing-data";
import {EventEmitter} from 'angular2/core';
import {ShapeData} from "../data/shape-data";
import {InputRangeComponent} from "./input-range.component";

@Component({
  selector: "emitter-property-panel",
  templateUrl: "app/components/template/property-emitter.html",
  inputs: ["drawingData", "shapeIdList"],
  directives: [InputRangeComponent]
})

export class PropertyEmitterPanel {
  private drawingData:DrawingData;

  constructor() {
  }
}
