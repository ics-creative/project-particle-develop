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
    this.drawingData.bgColor = "#00000";
    this.drawingData.width = 500;
    this.drawingData.height = 500;

    this.drawingData.friction = 0;

    this.drawingData.startColor = "#FFFFFF";

    this.drawingData.startX = 250;
    this.drawingData.startXVariance = 50;

    this.drawingData.startY = 250;
    this.drawingData.startYVariance = 50;

    this.drawingData.lifeSpan = 100;
    this.drawingData.lifeSpanVariance = 30;

    this.drawingData.initialDirection = 270;
    this.drawingData.initialDirectionVariance = 60;

    this.drawingData.initialSpeed = 0.5;
    this.drawingData.initialSpeedVariance = 0.5;


    this.drawingData.accelerationSpeed = 0;
    this.drawingData.accelerationDirection = 0;

    this.drawingData.startAlpha = 1;
    this.drawingData.startAlphaVariance = 0;

    this.drawingData.finishAlpha = 1;
    this.drawingData.finishAlphaVariance = 0.5;

    this.drawingData.startScale = 1;
    this.drawingData.startScaleVariance = 0;

    this.drawingData.finishScale = 1;
    this.drawingData.finishScaleVariance = 0;

    this.drawingData.shapeIdList = [ParticleShapeTypes.Star,ParticleShapeTypes.MailFace,ParticleShapeTypes.Heart, ParticleShapeTypes.MailMark];

    this.drawingData.friction

    this.drawingData.emitFrequency = 1;
  }
}