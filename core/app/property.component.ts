import {Component} from "angular2/core";
import {DrawingData} from "./drawing-data";

const template = `
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Canvas Settings</h3>
  </div>
  <div class="panel-body">
      <input type="range" min="0" max="500" step="1" [(ngModel)]="drawingData.width" placeholder="width" />
      {{drawingData.width}}
      <hr>
      <input type="range" min="0" max="500" step="1" [(ngModel)]="drawingData.height" placeholder="height" />
      {{drawingData.height}}
      <hr>
      <input type="color" [(ngModel)]="drawingData.color" placeholder="color" value="{{drawingData.color}}" />
      {{drawingData.color}}
      <hr>
      x-value
      <input type="range" min="0" max="500" step="1" [(ngModel)]="drawingData.startX" placeholder="startX" />
      {{drawingData.startX}}
      <input type="range" min="0" max="500" step="1" [(ngModel)]="drawingData.startXVariance" placeholder="startXVariance" />
      {{drawingData.startXVariance}}

      <hr>
      y-value
      <input type="range" min="0" max="500" step="1" [(ngModel)]="drawingData.startY" placeholder="startY" />
      {{drawingData.startY}}
      <input type="range" min="0" max="500" step="1" [(ngModel)]="drawingData.startYVariance" placeholder="startYVariance" />
      {{drawingData.startYVariance}}


      <hr>
      speed
      <input type="range" min="0" max="1" step="0.1" [(ngModel)]="drawingData.speed" placeholder="speed" />
      {{drawingData.speed}}
      <input type="range" min="0" max="1" step="0.1" [(ngModel)]="drawingData.speedVariance" placeholder="speedVariance" />
      {{drawingData.speedVariance}}


      <hr>
      angle
      <input type="range" min="0" max="360" step="0.1" [(ngModel)]="drawingData.angle" placeholder="angle" />
      {{drawingData.angle}}
      <input type="range" min="0" max="360" step="0.1" [(ngModel)]="drawingData.angleVariance" placeholder="angleVariance" />
      {{drawingData.angleVariance}}

      <hr>
      start-alpha
      <input type="range" min="0" max="1" step="0.01" [(ngModel)]="drawingData.startAlpha" placeholder="startAlpha" />
      {{drawingData.startAlpha}}
      <input type="range" min="0" max="1" step="0.01" [(ngModel)]="drawingData.startAlphaVariance" placeholder="startAlphaVariance" />
      {{drawingData.startAlphaVariance}}

      <hr>
      finish-alpha
      <input type="range" min="0" max="1" step="0.01" [(ngModel)]="drawingData.finishAlpha" placeholder="finishAlpha" />
      {{drawingData.finishAlpha}}
      <input type="range" min="0" max="1" step="0.01" [(ngModel)]="drawingData.finishAlphaVariance" placeholder="finishAlphaVariance" />
      {{drawingData.finishAlphaVariance}}

      <hr>
      life span
      <input type="range" min="10" max="500" step="0.01" [(ngModel)]="drawingData.lifeSpan" placeholder="lifeSpan" />
      {{drawingData.lifeSpan}}
      <input type="range" min="0" max="500" step="0.01" [(ngModel)]="drawingData.lifeSpanVariance" placeholder="lifeSpanVariance" />
      {{drawingData.lifeSpanVariance}}

      <hr>
      <button class="btn btn-primary">保存</button>
  </div>
</div>
`;

@Component({
  selector: "property-panel",
  template: template,
  inputs: ["drawingData"]
})

export class PropertyPanel {
  private drawingData:DrawingData;

  constructor() {
  }
}