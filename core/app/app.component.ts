///<reference path="stage.component.ts"/>
///<reference path="property.component.ts"/>
///<reference path="shape-property.component.ts"/>
import {Component} from "angular2/core";
import {DrawingData} from "./drawing-data";
import {PropertyPanel} from "./property.component";
import {ShapePropertyModal} from "./shape-property.component";
import {StageComponent} from "./stage.component";
import {ViewChild} from "angular2/core";
import {ParticleShapeTypes} from "./particle-canvas/particle-shape-types";

const template = `
<div class="container">
    <div class="col-sm-7 col-xs-12">
        <stage #stageComponent [drawingData]="drawingData"></stage>
    </div>
    <div class="col-sm-5 col-xs-12">
        <property-panel [drawingData]="drawingData" (exportSVGEvent)="handleSVGClick()" (exportParamaterEvent)="handleExportParamaterClick()"></property-panel>
    </div>
    <shape-property-modal [drawingData]="drawingData"></shape-property-modal>
</div>
`;

@Component({
  selector: `my-app`,
  template: template,
  directives: [StageComponent, PropertyPanel,ShapePropertyModal],
})

export class AppComponent {
  private drawingData:DrawingData;
  @ViewChild("stageComponent") stageComponent:StageComponent;

  handleSVGClick(){
    this.stageComponent.exportSVG().then(this.openSVGExportWindow);
  }
  openSVGExportWindow = () =>{
    window.open("data:image/svg+xml,\n"+encodeURIComponent(this.stageComponent.getParticleSVGString()));
  }

  handleExportParamaterClick(){
    console.log("handleExportParamaterClick");
  }

  constructor() {
    this.drawingData = new DrawingData();
  }
}