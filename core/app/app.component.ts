///<reference path="stage.component.ts"/>
///<reference path="property.component.ts"/>
import {Component} from "angular2/core";
import {DrawingData} from "./drawing-data";
import {PropertyPanel} from "./property.component";
import {StageComponent} from "./stage.component";

const template = `
<div class="container">
    <div class="col-sm-7 col-xs-12">
        <stage [drawingData]="drawingData"></stage>
    </div>
    <div class="col-sm-5 col-xs-12">
        <property-panel [drawingData]="drawingData"></property-panel>
    </div>
</div>
`;

const modal = `
<div class="modal fade" id="ShapeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
          aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Shapes</h4>
      </div>
      <div class="modal-body">

        <div class="col-sm-3">
          ☆
        </div>
        <div class="col-sm-3">
          ♡
        </div>
        <div class="col-sm-3">
          〠
        </div>
        <div class="col-sm-3">
          〒
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
`;


@Component({
  selector: `my-app`,
  template: template + modal,
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