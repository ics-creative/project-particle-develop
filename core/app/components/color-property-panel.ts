import {Component} from "angular2/core";
import {ColorData} from "../data/color-data";
import {DrawingData} from "../data/drawing-data";
import {ColorUnitPropertyPanel} from "./color-unit-property.component";

@Component({
  selector: "color-property-panel",
  templateUrl: "app/components/template/color-property.html",
  inputs: ["drawingData"],
  directives: [ColorUnitPropertyPanel]
})
export class ColorPropertyPanel {
  private drawingData:DrawingData;
}
