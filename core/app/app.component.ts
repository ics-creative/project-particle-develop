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
        <property-panel [drawingData]="drawingData" (greetingMessage)="handleSVGClick()"></property-panel>
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

        <div class="col-sm-3" (click)="selectShape('star')">
          ☆
        </div>
        <div class="col-sm-3" (click)="selectShape('heart')">
          ♡
        </div>
        <div class="col-sm-3"(click)="selectShape('mail-face')">
          〠
        </div>
        <div class="col-sm-3" (click)="selectShape('mail-mark')">
          〒
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" (click)="saveChanges()" data-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
`;


@Component({
  selector: `my-app`,
  template: template + modal,
  directives: [StageComponent, PropertyPanel],
})

export class AppComponent {
  private drawingData:DrawingData;
  private temporarySelect:string;
  selectShape = (shapeId) => {
    console.log(`selectapp:${shapeId}`);
    //  ラジオボタンとかにすればテンポラリ選択不要そう
    this.temporarySelect = shapeId;
  }
  saveChanges = () => {
    this.drawingData.shapeId = this.temporarySelect;
  }

  handleSVGClick(){
    console.log("handleSVGClick");


  }

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

    this.drawingData.startAlpha = 1;
    this.drawingData.startAlphaVariance = 0;

    this.drawingData.finishAlpha = 1;
    this.drawingData.finishAlphaVariance = 0.5;
  }
}