"use strict";

import {ColorData} from "./data-color";
import {AlphaCurveType} from "../enum/alpha-curve-type";

export class DrawingData {
  bgColor:string = "";
  width:number = 0.0;
  height:number = 0.0;

  emitFrequency:number = 0;

  lifeSpan:number = 0;
  lifeSpanVariance:number = 0;

  initialDirection:number = 0;
  initialDirectionVariance:number = 0;

  initialSpeed:number = 0;
  initialSpeedVariance:number = 0;

  friction:number = 0;

  accelerationSpeed:number = 0;
  accelerationDirection:number = 0;

  startScale:number = 0;
  startScaleVariance:number = 0;

  finishScale:number = 0;
  finishScaleVariance:number = 0;


  startAlpha:number = 0;
  startAlphaVariance:number = 0;

  finishAlpha:number = 0;
  finishAlphaVariance:number = 0;

  startX:number = 0;
  startXVariance:number = 0;

  startY:number = 0;
  startYVariance:number = 0;

  shapeIdList:string[] = ["kirakira"];

  startColor:ColorData = new ColorData();

  blendMode:boolean = true;
  alphaCurveType:number = AlphaCurveType.Normal;

  constructor() {
  }

  public into(obj:any):void {
    for (let key in obj) {

      // 無視するプロパティー
      if (key == "width" || key == "height" || key == "startX" || key == "startY") {
        continue;
      }

      if (Reflect.has(this, key) == true) {
        let val = <any> obj[key];
        // イマドキなプロパティー反映方法を適用 ICS-Ikeda 2016-01-22
        Reflect.set(this, key, val);
      }
    }
  }
}