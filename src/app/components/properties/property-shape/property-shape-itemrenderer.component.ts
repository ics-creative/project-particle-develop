import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {assets} from 'particlejs';

@Component({
  selector   : 'app-shape-itemrenderer',
  templateUrl: './property-shape-itemrenderer.component.html',
})

/**
 * シェイプの選択パネル内のアイテムレンダラーです。
 */
export class PropertyShapeItemRendererComponent implements AfterViewInit {
  @Input() private shapeId: string;

  @ViewChild('myCanvas') myCanvas: any;

  constructor() {
  }

  ngAfterViewInit() {
    const canvas = this.myCanvas.nativeElement;

    const stage = new createjs.Stage(canvas);

    // Adobe Animate CCから書きだしたシェイプを使う
    const namespaceObj = assets;
    const cls = <any> namespaceObj[this.shapeId];

    const shape = new cls();
    shape.x = 32;
    shape.y = 32;
    shape.scaleX = shape.scaleY = 0.5;
    // はい、レンダーする
    stage.addChild(shape);

    // おわり
    stage.update();
  }
}

