import {Component} from "angular2/core";
import {DrawingData} from "../data/drawing-data";
import {EventEmitter} from 'angular2/core';

@Component({
  selector: "shape-property-modal",
  templateUrl: "app/components/template/shape-property.html",
  inputs: ["drawingData"]
})

export class ShapePropertyModal {
  private drawingData:DrawingData;
  private temporarySelect:string;

  selectShape = (shapeId) => {
    console.log(`selectapp:${shapeId}`);
    //  ラジオボタンとかにすればテンポラリ選択不要そう
    this.temporarySelect = shapeId;
  }

  saveChanges = () => {
    // TODO:配列で選択できるようにする
    this.drawingData.shapeIdList = [this.temporarySelect];
  }

  constructor() {
  }
}
