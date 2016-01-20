import {Component} from "angular2/core";
import {ColorData} from "../data/color-data";
import {InputRangeComponent} from "./input-range.component";

@Component({
  selector: "color-unit-property-panel",
  templateUrl: "app/components/template/color-unit-property.html",
  inputs: ["colorData"],
  directives: [InputRangeComponent]
})
export class ColorUnitPropertyPanel {
  private colorData:ColorData;
}
