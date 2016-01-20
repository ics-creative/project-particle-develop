import {ParticleShapeTypes} from "../particle/particle-shape-types";
import {ColorData} from "./color-data";

export class DrawingData {
  bgColor:string;
  width:number;
  height:number;

  emitFrequency:number;

  lifeSpan:number;
  lifeSpanVariance:number;

  initialDirection:number;
  initialDirectionVariance:number;

  initialSpeed:number;
  initialSpeedVariance:number;

  friction:number;

  accelerationSpeed:number;
  accelerationDirection:number;

  startScale:number;
  startScaleVariance:number;

  finishScale:number;
  finishScaleVariance:number;


  startAlpha:number;
  startAlphaVariance:number;

  finishAlpha:number;
  finishAlphaVariance:number;

  startX:number;
  startXVariance:number;

  startY:number;
  startYVariance:number;

  shapeIdList:string[];


  startColor:ColorData;
  finishColor:ColorData;

  constructor() {

    this.bgColor = "#00000";
    this.width = 500;
    this.height = 500;

    this.friction = 0;

    this.startX = 250;
    this.startXVariance = 50;

    this.startY = 250;
    this.startYVariance = 50;

    this.lifeSpan = 100;
    this.lifeSpanVariance = 30;

    this.initialDirection = 270;
    this.initialDirectionVariance = 60;

    this.initialSpeed = 0.5;
    this.initialSpeedVariance = 0.5;


    this.accelerationSpeed = 0;
    this.accelerationDirection = 0;

    this.startAlpha = 1;
    this.startAlphaVariance = 0;

    this.finishAlpha = 1;
    this.finishAlphaVariance = 0.5;

    this.startScale = 1;
    this.startScaleVariance = 0;

    this.finishScale = 1;
    this.finishScaleVariance = 0;

    this.shapeIdList = ["kirakira"];

    this.emitFrequency = 1;


    this.startColor = new ColorData();
    this.finishColor = new ColorData();
  }

  into(obj:Object) {

    for (var key in this) {
      if (this.hasOwnProperty(key)) {
        var val = this[key];
        this[key] = obj[key];
      }
    }
  }
}