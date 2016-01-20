import {Component} from "angular2/core";
import {PropertyColorUnit} from "./property-color-unit.component";
import {ParticleParamater} from "../assets/particle-paramater";
import {DrawingData} from "../data/drawing-data";
import {PropertyEmitterPanel} from "./property-emitter.component";
import {PropertyParticlePanel} from "./property-particle.component";
import {PropertyColorPanel} from "./property-color.component";
import {PropertyTemplatePanel} from "./property-template.component";
import {PropertyShapePanel} from "./property-shape.component";

@Component({
  selector: "property-panel",
  templateUrl: "app/components/template/property.html",
  inputs: ["drawingData"],
  directives: [
    PropertyColorUnit,
    PropertyEmitterPanel,
    PropertyParticlePanel,
    PropertyColorPanel,
    PropertyTemplatePanel,
    PropertyShapePanel]
})
export class PropertyPanel {
  private drawingData:DrawingData;

  constructor() {

  }

}
