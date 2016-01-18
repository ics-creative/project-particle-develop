///<reference path="stage.component.ts"/>
///<reference path="property.component.ts"/>
///<reference path="shape-property.component.ts"/>
import {Component} from "angular2/core";
import {DrawingData} from "../data/drawing-data";
import {PropertyPanel} from "./property.component";
import {SPPropertyPanel} from "./sp-property.component";
import {ShapePropertyModal} from "./shape-property.component";
import {StageComponent} from "./stage.component";
import {ViewChild} from "angular2/core";
import {ParticleShapeTypes} from "../particle/particle-shape-types";
import {ElementRef} from "angular2/core";

const template = `
<div class="navbar navbar-default">
  <div class="container">
    ICS Draw
  </div>
</div>
<div id="wrapper" class="clearfix">
  <div id="main">
    <div>
      <div id="mainContent">
        <stage #stageComponent [drawingData]="drawingData"></stage>
      </div>
    </div>
  </div>
  <nav id="propertyPanel" class="hidden-xs">
    <property-panel [drawingData]="drawingData"
                    (exportSVGEvent)="handleSVGClick()"
                    (exportParamaterEvent)="handleExportParamaterClick()"
    ></property-panel>
  </nav>
</div>
<nav id="spPropertyPanel" class="show-xs">
  <sp-property-panel [drawingData]="drawingData"
                (exportPNGEvent)="handlePNGClick()"
                (importCameraEvent)="handleCamera()"
></sp-property-panel>
</nav>

<shape-property-modal [drawingData]="drawingData"></shape-property-modal>
`;

@Component({
    selector: `my-app`,
    template: template,
    directives: [StageComponent, PropertyPanel, SPPropertyPanel, ShapePropertyModal],
})

export class AppComponent {
    private drawingData:DrawingData;
    @ViewChild("stageComponent") stageComponent:StageComponent;
    @ViewChild("propertyPanel") propertyPanel:PropertyPanel;
    @ViewChild("spPropertyPanel") spPropertyPanel:SPPropertyPanel;

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