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
import {ElementRef} from "angular2/core";

const template = `
<div class="container">
    <div class="col-sm-7 col-xs-12">
        <stage #stageComponent [drawingData]="drawingData"></stage>
    </div>
  <nav id="propertyPanel" class="navbar navbar-fixed-top">
      <property-panel [drawingData]="drawingData"
      (exportSVGEvent)="handleSVGClick()"
      (exportParamaterEvent)="handleExportParamaterClick()"
      (exportPNGEvent)="handlePNGClick()"
      (importCameraEvent)="handleCamera()"
   ></property-panel>
  </nav>
    <shape-property-modal [drawingData]="drawingData"></shape-property-modal>
</div>
`;

@Component({
  selector: `my-app`,
  template: template,
  directives: [StageComponent, PropertyPanel, ShapePropertyModal],
})

export class AppComponent {
  private drawingData:DrawingData;
  @ViewChild("stageComponent") stageComponent:StageComponent;
  @ViewChild("propertyPanel") propertyPanel:PropertyPanel;

  handleSVGClick() {
    this.stageComponent.exportSVG().then(this.openSVGExportWindow);
  }

  openSVGExportWindow = () => {
    window.open("data:image/svg+xml,\n" + encodeURIComponent(this.stageComponent.getParticleSVGString()));
  };

  handleExportParamaterClick() {
    window.open("data:text/plain;charset=UTF-8,\n" + encodeURIComponent(JSON.stringify(this.drawingData)));
  }

  constructor(element:ElementRef) {
    this.drawingData = new DrawingData();
  }
}