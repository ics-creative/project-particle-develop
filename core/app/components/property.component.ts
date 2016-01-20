import {Component} from "angular2/core";
import {ColorUnitPropertyPanel} from "./color-unit-property.component";
import {ParticleParamater} from "../assets/particle-paramater";
import {DrawingData} from "../data/drawing-data";
import {EmitterPropertyPanel} from "./emitter-property.component";
import {ParticlePropertyPanel} from "./particle-property.component";

@Component({
  selector: "property-panel",
  templateUrl: "app/components/template/property.html",
  inputs: ["drawingData","templateList"],
  directives: [ColorUnitPropertyPanel,EmitterPropertyPanel,ParticlePropertyPanel]
})
export class PropertyPanel {
  private drawingData:DrawingData;

  private templateList:any[];
  private template:ParticleParamater ;
  constructor() {

    var template = new ParticleParamater();

    this.templateList = template.list;
  }

  selectTemplate(value:Object) {
    this.drawingData.into(value);
  }
}
