import {Component} from "angular2/core";
import {DrawingData} from "../data/data-drawing";
import {EventEmitter} from 'angular2/core';
import {ShapeData} from "../data/data-shape";
import {PropertyShapeItemRenderer} from "./property-shape-itemrenderer.component";

@Component({
  selector: "shape-property-panel",
  templateUrl: "app/components/template/property-shape.html",
  inputs: ["drawingData", "shapeIdList"],
  directives: [PropertyShapeItemRenderer]
})

/**
 * シェイプの選択パネルの制御クラスです。
 */
export class PropertyShapePanel {
  private drawingData:DrawingData;
  private shapeIdList:string[] = new ShapeData().assetList;

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

  constructor() {
  }
}
