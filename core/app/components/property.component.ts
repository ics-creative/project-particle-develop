import {Component} from "angular2/core";
import {ColorUnitPropertyPanel} from "./color-unit-property.component";
import {ParticleParamater} from "../assets/particle-paramater";
import {DrawingData} from "../data/drawing-data";
import {EmitterPropertyPanel} from "./emitter-property.component";
import {ParticlePropertyPanel} from "./particle-property.component";
import {ColorPropertyPanel} from "./color-property-panel";
import {ParticleTemplatePropertyPanel} from "./particle-template-property";
import {ShapePropertyModal} from "./shape-property.component";

@Component({
  selector: "property-panel",
  templateUrl: "app/components/template/property.html",
  inputs: ["drawingData"],
  directives: [
    ColorUnitPropertyPanel,
    EmitterPropertyPanel,
    ParticlePropertyPanel,
    ColorPropertyPanel,
    ParticleTemplatePropertyPanel,
    ShapePropertyModal]
})
export class PropertyPanel {
  private drawingData:DrawingData;

  constructor() {

  }

}
