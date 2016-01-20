import {Component} from "angular2/core";
import {ColorData} from "../data/color-data";

@Component({
  selector: "color-property-panel",
  templateUrl: "app/components/template/color-property.html",
  inputs: ["colorData"]
})
export class ColorPropertyPanel {
  private colorData:ColorData;
}
