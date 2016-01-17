///<reference path="stage.component.ts"/>
///<reference path="property.component.ts"/>
import {Component} from "angular2/core";
import {DrawingData} from "./drawing-data";
import {PropertyPanel} from "./property.component";
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
  @ViewChild("stageComponent") stageComponent:StageComponent;

  selectShape = (shapeId) => {
    console.log(`selectapp:${shapeId}`);
    //  ラジオボタンとかにすればテンポラリ選択不要そう
    this.temporarySelect = shapeId;
  }
  saveChanges = () => {
    // TODO:配列で選択できるようにする
    this.drawingData.shapeIdList = [this.temporarySelect];
  }

  handleSVGClick(){
    console.log("handleSVGClick");
    this.stageComponent.exportSVG();
  }

  handleExportParamaterClick(){
    console.log("handleExportParamaterClick");
  }

  constructor() {
    this.drawingData = new DrawingData();
    this.drawingData.bgColor = "#00000";
    this.drawingData.width = 500;
    this.drawingData.height = 500;

    this.drawingData.fliction = 0;

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

    this.drawingData.startAlpha = 1;
    this.drawingData.startAlphaVariance = 0;

    this.drawingData.finishAlpha = 1;
    this.drawingData.finishAlphaVariance = 0.5;

    this.drawingData.startScale = 1;
    this.drawingData.startScaleVariance = 0;

    this.drawingData.finishScale = 1;
    this.drawingData.finishScaleVariance = 0;

    this.drawingData.shapeIdList = [ParticleShapeTypes.Star,ParticleShapeTypes.MailFace,ParticleShapeTypes.Heart, ParticleShapeTypes.MailMark];

    this.drawingData.fliction

    this.drawingData.emitFrequency = 1;
  }
}