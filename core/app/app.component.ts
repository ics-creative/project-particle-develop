///<reference path="stage.component.ts"/>
///<reference path="property.component.ts"/>
import {Component} from "angular2/core";
import {DrawingData} from "./drawing-data";
import {PropertyPanel} from "./property.component";
import {StageComponent} from "./stage.component";

const template = `
<div>
  <stage [drawingData]="drawingData"></stage>
  <property-panel [drawingData]="drawingData"></property-panel>
</div>
`;


@Component({
  selector: `my-app`,
  template: template,
  directives: [StageComponent, PropertyPanel]
})

export class AppComponent {
  private drawingData:DrawingData;

  constructor() {
    this.drawingData = new DrawingData();
    this.drawingData.color = "0xFF0000";
    this.drawingData.width = 500;
    this.drawingData.height = 500;

    this.drawingData.startX = 250;
    this.drawingData.startXVariance = 50;

    this.drawingData.startY = 250;
    this.drawingData.startYVariance = 50;

    this.drawingData.lifeSpan = 500;
    this.drawingData.lifeSpanVariance = 30;

    this.drawingData.angle = 0;
    this.drawingData.angleVariance = 360;

    this.drawingData.speed = 0.5;
    this.drawingData.speedVariance = 0.5;

  }
}