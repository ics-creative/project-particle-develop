import {Component, ViewChild} from "angular2/core";
import {AfterViewInit} from "angular2/core";

@Component({
  selector: "shape-itemrenderer",
  templateUrl: "app/components/template/property-shape-itemrenderer.html",
  inputs: ["shapeId"]
})

/**
 * シェイプの選択パネル内のアイテムレンダラーです。
 */
export class PropertyShapeItemRenderer implements AfterViewInit {
  private shapeId:string;

  @ViewChild("myCanvas") myCanvas;

  constructor() {
  }

  ngAfterViewInit() {
    let canvas = this.myCanvas.nativeElement;

    let stage = new createjs.Stage(canvas);

    // Adobe Animate CCから書きだしたシェイプを使う
    var shape = new window["lib"][this.shapeId];
    shape.x = 32;
    shape.y = 32;
    shape.scaleX = shape.scaleY = 0.5;
    // はい、レンダーする
    stage.addChild(shape);

    // おわり
    stage.update();
  }
}
