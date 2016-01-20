import {Component} from "angular2/core";
import {ColorPropertyPanel} from "./color-property.component";

@Component({
  selector: "property-panel",
  templateUrl: "app/components/template/property.html",
  inputs: ["drawingData"],
  directives: [ColorPropertyPanel]
})
export class PropertyPanel {
}
