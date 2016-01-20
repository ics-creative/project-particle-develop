import {Component} from "angular2/core";
import {ColorData} from "../data/color-data";

@Component({
  selector: "color-unit-property-panel",
  templateUrl: "app/components/template/color-unit-property.html",
  inputs: ["colorData"]
})
export class ColorUnitPropertyPanel {
  private colorData:ColorData;
}
