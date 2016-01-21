import {Component} from "angular2/core";
import {DrawingData} from "../data/data-drawing";
import {InputRangeComponent} from "./input-range.component";

@Component({
  selector: "canvas-property-panel",
  templateUrl: "app/components/template/property-canvas.html",
  inputs: ["drawingData"],
  directives: [InputRangeComponent]
})

export class PropertyCanvasPanel {
  private drawingData:DrawingData;

  constructor() {
  }
}
