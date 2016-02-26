import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {PropertyColorUnit} from "./property-color-unit.component";
import {ParticleParameter} from "../assets/particle-parameter";
import {PropertyEmitterPanel} from "./property-emitter.component";
import {PropertyParticlePanel} from "./property-particle.component";
import {PropertyColorPanel} from "./property-color.component";
import {PropertyTemplatePanel} from "./property-template.component";
import {PropertyShapePanel} from "./property-shape.component";
import {PropertyCanvasPanel} from "./property-canvas.component";

"use strict";

@Component({
  selector: "property-panel",
  templateUrl: "app/components-html/property.html",
  inputs: ["drawingData"],
  directives: [
    PropertyColorUnit,
    PropertyEmitterPanel,
    PropertyParticlePanel,
    PropertyColorPanel,
    PropertyTemplatePanel,
    PropertyShapePanel,
    PropertyCanvasPanel],
})
export class PropertyPanel {
  private drawingData:effects.DrawingData;

  constructor(private localeData:LocaleData) {
  }

}
