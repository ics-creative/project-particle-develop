import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {EventEmitter} from 'angular2/core';
import {PropertyShapeItemRenderer} from "./property-shape-itemrenderer.component";

"use strict";

@Component({
  selector: "shape-property-panel",
  template: `<div class="card">
  <header class="card-header">
    <h3>{{localeData.SS_head}}</h3>
  </header>
  <hr>
  <div class="card-block row">
    <div *ngFor="#shapeId of shapeIdList" class="col-sm-4 shapeListItem row"
         [class.selected]="drawingData.shapeIdList.indexOf(shapeId) > -1"
         (click)="handleClick(shapeId)">
      <shape-itemrenderer
        class="shape-itemrenderer"
        shapeId="{{shapeId}}"
      ></shape-itemrenderer>
    </div>
  </div>
</div>
`,
  inputs: ["drawingData", "shapeIdList"],
  directives: [PropertyShapeItemRenderer]
})

/**
 * シェイプの選択パネルの制御クラスです。
 */
export class PropertyShapePanel {
  private drawingData:particlejs.DrawingData;
  private shapeIdList:string[] = new particlejs.ShapeData().assetList;

  constructor(private localeData:LocaleData) {
  }

  private handleClick(shapeId:string) {

    var index = this.drawingData.shapeIdList.indexOf(shapeId);
    if (index == -1) { // 含まれていなければ
      // 追加
      this.drawingData.shapeIdList.push(shapeId);
    } else { // 含まれていたら
      // 2個以上のときのみ
      if (this.drawingData.shapeIdList.length >= 2) {
        // 削除
        this.drawingData.shapeIdList.splice(index, 1);
      }
    }
  }


}
