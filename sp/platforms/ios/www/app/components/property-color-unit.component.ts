"use strict";

import {Component} from "angular2/core";
import {ColorData} from "../data/data-color";
import {InputRangeComponent} from "./input-range.component";

@Component({
  selector: "color-unit-property-panel",
  templateUrl: "app/components/template/property-color-unit.html",
  inputs: ["colorData"],
  directives: [InputRangeComponent]
})
export class PropertyColorUnit {
  private colorData:ColorData;
}
