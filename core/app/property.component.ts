import {Component} from "angular2/core";
import {DrawingData} from "./drawing-data";
import {EventEmitter} from 'angular2/core';

const template = `
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Canvas Settings</h3>
  </div>
  <div class="panel-body">
    <div class="row">
      <div class="col-xs-6">
        width <input type="range" min="0" max="500" step="1" [(ngModel)]="drawingData.width" placeholder="width"/>
        {{drawingData.width}}
        height <input type="range" min="0" max="500" step="1" [(ngModel)]="drawingData.height" placeholder="height"/>
        {{drawingData.height}}
        <hr>
        <input type="color" [(ngModel)]="drawingData.color" placeholder="color" value="{{drawingData.color}}"/>
        {{drawingData.color}}
        <hr>
        x-value
        <input type="range" min="0" max="500" step="1" [(ngModel)]="drawingData.startX" placeholder="startX"/>
        {{drawingData.startX}}
        <input type="range" min="0" max="500" step="1" [(ngModel)]="drawingData.startXVariance"
               placeholder="startXVariance"/>
        {{drawingData.startXVariance}}

        <hr>
        y-value
        <input type="range" min="0" max="500" step="1" [(ngModel)]="drawingData.startY" placeholder="startY"/>
        {{drawingData.startY}}
        <input type="range" min="0" max="500" step="1" [(ngModel)]="drawingData.startYVariance"
               placeholder="startYVariance"/>
        {{drawingData.startYVariance}}


        <hr>
        speed
        <input type="range" min="0" max="1" step="0.1" [(ngModel)]="drawingData.speed" placeholder="speed"/>
        {{drawingData.speed}}
        <input type="range" min="0" max="1" step="0.1" [(ngModel)]="drawingData.speedVariance"
               placeholder="speedVariance"/>
        {{drawingData.speedVariance}}
      </div>
      <div class="col-xs-6">
        angle
        <input type="range" min="0" max="360" step="0.1" [(ngModel)]="drawingData.angle" placeholder="angle"/>
        {{drawingData.angle}}
        <input type="range" min="0" max="360" step="0.1" [(ngModel)]="drawingData.angleVariance"
               placeholder="angleVariance"/>
        {{drawingData.angleVariance}}

        <hr>
        start-alpha
        <input type="range" min="0" max="1" step="0.01" [(ngModel)]="drawingData.startAlpha" placeholder="startAlpha"/>
        {{drawingData.startAlpha}}
        <input type="range" min="0" max="1" step="0.01" [(ngModel)]="drawingData.startAlphaVariance"
               placeholder="startAlphaVariance"/>
        {{drawingData.startAlphaVariance}}

        <hr>
        finish-alpha
        <input type="range" min="0" max="1" step="0.01" [(ngModel)]="drawingData.finishAlpha"
               placeholder="finishAlpha"/>
        {{drawingData.finishAlpha}}
        <input type="range" min="0" max="1" step="0.01" [(ngModel)]="drawingData.finishAlphaVariance"
               placeholder="finishAlphaVariance"/>
        {{drawingData.finishAlphaVariance}}


        <hr>
        start-scale
        <input type="range" min="0" max="1" step="0.01" [(ngModel)]="drawingData.startScale" placeholder="startScale"/>
        {{drawingData.startScale}}
        <input type="range" min="0" max="1" step="0.01" [(ngModel)]="drawingData.startScaleVariance"
               placeholder="startScaleVariance"/>
        {{drawingData.startScaleVariance}}

        <hr>
        start-scale
        <input type="range" min="0" max="1" step="0.01" [(ngModel)]="drawingData.finishScale"
               placeholder="finishScale"/>
        {{drawingData.finishScale}}
        <input type="range" min="0" max="1" step="0.01" [(ngModel)]="drawingData.finishScaleVariance"
               placeholder="finishScaleVariance"/>
        {{drawingData.finishScaleVariance}}



        <hr>
        life span
        <input type="range" min="10" max="500" step="0.01" [(ngModel)]="drawingData.lifeSpan" placeholder="lifeSpan"/>
        {{drawingData.lifeSpan}}
        <input type="range" min="0" max="500" step="0.01" [(ngModel)]="drawingData.lifeSpanVariance"
               placeholder="lifeSpanVariance"/>
        {{drawingData.lifeSpanVariance}}
        <div>
          <a href="#" class="btn btn-info btn-lg btn-block" data-toggle="modal" data-target="#ShapeModal">Shapes</a>
        </div>
      </div>
    </div>
    <button class="btn btn-primary btn-lg btn-block" (click)="exportSVG()">保存</button>
  </div>
</div>
`;
@Component({
  selector: "property-panel",
  template: template,
  inputs: ["drawingData"],
  events: ['greetingMessage']
})

export class PropertyPanel {
  private greetingMessage = new EventEmitter();
  private drawingData:DrawingData;

  exportSVG(){
    this.greetingMessage.emit(null);
    console.log("hoge");
  }
  constructor() {
  }
}
