/**
 * Created by nyamogera on 2016/01/20.
 */
import {Component} from "angular2/core";
import {DrawingData} from "../data/drawing-data";
import {EventEmitter} from 'angular2/core';
import {ShapeData} from "../data/shape-data";

@Component({
  selector: "emitter-property-panel",
  templateUrl: "app/components/template/emitter-property.html",
  inputs: ["drawingData","shapeIdList"]
})

export class EmitterPropertyPanel {
  private drawingData:DrawingData;
  constructor() {
  }
}
