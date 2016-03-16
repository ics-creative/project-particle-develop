import {Component, ViewChild} from "angular2/core";
import {AfterViewInit} from "angular2/core";

declare namespace window {
  export namespace particlejs {
    export var assets:Object;
  }
}

"use strict";

@Component({
  selector: "shape-itemrenderer",
  template: `<canvas #myCanvas width="64" height="64"></canvas>`,
  inputs: ["shapeId"]
})

/**
 * シェイプの選択パネル内のアイテムレンダラーです。
 */
export class PropertyShapeItemRenderer implements AfterViewInit {
  private shapeId:string;

  @ViewChild("myCanvas") myCanvas:any;

  constructor() {
  }

  ngAfterViewInit() {
    let canvas = this.myCanvas.nativeElement;

    let stage = new createjs.Stage(canvas);

    // Adobe Animate CCから書きだしたシェイプを使う
    let namespaceObj = <any> window["particlejs"]["assets"];
    let cls = <any> namespaceObj[this.shapeId];
    let shape = new cls();
    shape.x = 32;
    shape.y = 32;
    shape.scaleX = shape.scaleY = 0.5;
    // はい、レンダーする
    stage.addChild(shape);

    // おわり
    stage.update();
  }
}

