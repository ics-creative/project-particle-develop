import {Component} from "angular2/core";
import {ColorPropertyPanel} from "./color-property.component";
import {ParticleParamater} from "../assets/particle-paramater";
import {DrawingData} from "../data/drawing-data";

@Component({
  selector: "property-panel",
  templateUrl: "app/components/template/property.html",
  inputs: ["drawingData","templateList"],
  directives: [ColorPropertyPanel]
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
