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
    this.drawingData.width = 100;
    this.drawingData.height = 100;
  }
}