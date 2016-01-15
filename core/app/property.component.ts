import {Component} from "angular2/core";
import {DrawingData} from "./drawing-data";

const template = `
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Canvas Settings</h3>
  </div>
  <div class="panel-body">
      <input type="range" min="0" max="100" step="1" [(ngModel)]="drawingData.width" placeholder="width" />
      {{drawingData.width}}
      <hr>
      <input type="range" min="0" max="100" step="1" [(ngModel)]="drawingData.height" placeholder="height" />
      {{drawingData.height}}
      <hr>
      <input type="color" [(ngModel)]="drawingData.color" placeholder="color" value="{{drawingData.color}}" />
      {{drawingData.color}}
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