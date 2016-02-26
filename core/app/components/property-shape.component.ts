import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {EventEmitter} from 'angular2/core';
import {PropertyShapeItemRenderer} from "./property-shape-itemrenderer.component";

"use strict";

@Component({
  selector: "shape-property-panel",
  templateUrl: "app/components-html/property-shape.html",
  inputs: ["drawingData", "shapeIdList"],
  directives: [PropertyShapeItemRenderer]
})

/**
 * シェイプの選択パネルの制御クラスです。
 */
export class PropertyShapePanel {
  private drawingData:effects.DrawingData;
  private shapeIdList:string[] = new effects.ShapeData().assetList;

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
