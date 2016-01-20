import {Component} from "angular2/core";
import {ColorData} from "../data/color-data";
import {DrawingData} from "../data/drawing-data";
import {PropertyColorUnit} from "./property-color-unit.component";

@Component({
  selector: "color-property-panel",
  templateUrl: "app/components/template/property-color.html",
  inputs: ["drawingData"],
  directives: [PropertyColorUnit]
})
export class PropertyColorPanel {
  private drawingData:DrawingData;
}
