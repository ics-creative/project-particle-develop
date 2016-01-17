import {ParticleShapeTypes} from "./particle-shape-types";
"use strict";

import {Particle} from "./particle";
import {DrawingData} from "../drawing-data";
/**
 * Created by nyamogera on 2016/01/15.
 */

export class ParticleEmitter {

  public particlesPool:Particle[];
  public activeParticles:Particle[];

  public container:createjs.Container;

  private currentInterval:number;

  public drawingData:DrawingData;

  constructor() {
    this.particlesPool = new Array();
    this.activeParticles = new Array();

    this.container = new createjs.Container();

  }

  update = (drawingData:DrawingData) => {
    this.drawingData = drawingData;

    this.emit();
    this.animate();
    this.lifeCheck();

  }

  /**
   * パーティクルの動き。
   */
  private animate = () => {

    for (var i = 0; i < this.activeParticles.length; i++) {

      let particle = this.activeParticles[i];

      particle.currentLife--;

      particle.vx = particle.vx * (1 - this.drawingData.fliction);
      particle.vy = particle.vy * (1 - this.drawingData.fliction);


      particle.x = particle.x + particle.vx;
      particle.y = particle.y + particle.vy;

      particle.particleShape.x = particle.x;
      particle.particleShape.y = particle.y;

      var lifeParcent = Math.max( particle.currentLife,0 )  / particle.totalLife;

      var alpha = particle.finishAlpha + (particle.startAlpha - particle.finishAlpha ) * lifeParcent ;

      particle.particleShape.alpha = alpha;


      var scale = particle.finishScale + (particle.startScale - particle.finishScale ) * lifeParcent ;

      particle.particleShape.scaleX = particle.particleShape.scaleY = scale;

      //  パーティクルが死んでいたら、オブジェクトプールに移動
      if (particle.currentLife < 0) {
        particle.isAlive = false;
      }
    }
  }

  /**
   * パーティクルが生きているか確認する。
   */
  lifeCheck = () => {
    for (var i = 0; i < this.activeParticles.length; i++) {
      // もしも死んでいたら、アクティブリストから外してプールに保存する。
      if (!this.activeParticles[i].isAlive) {
        var particle = this.activeParticles[i];
        this.container.removeChild(particle.particleShape);
        this.activeParticles.splice(i, 1);
        this.particlesPool.push(particle);
        i--;
      }
    }
  }

  /**
   * パーティクルの生成（インターバルチェックする）
   */
  private emit = () => {

    for(var i = 0; i < this.drawingData.emitFrequency; i ++ ) {
      let particle = this.generateParticle();
      this.container.addChild(particle.particleShape);
      this.activeParticles.push(particle);
    }
  }

  /**
   * パーティクルのパラメータを設定します
   * @returns {null}
   */
  private generateParticle = ():Particle => {

    var particle:Particle = null;
    if (this.particlesPool.length >= 1) {
      particle = this.particlesPool.shift();
    } else {
      particle = new Particle();
    }

    this.setParticleParamater(particle);

    return particle;
  }

  /**
   * パーティクルパラメータの設定
   * @param particle
   */
  private setParticleParamater(particle):void {

    particle.particleShape.removeAllChildren();

    particle.isAlive = true;
    particle.x = this.getParam(this.drawingData.startX, this.drawingData.startXVariance,false);
    particle.y = this.getParam(this.drawingData.startY, this.drawingData.startYVariance,false);


    this.generateShape(particle,this.drawingData.shapeIdList);

    //  生存期間
    particle.totalLife = Math.max(1, this.getParam(this.drawingData.lifeSpan, this.drawingData.lifeSpanVariance,true));
    particle.currentLife = particle.totalLife;

    //  スピード
    var speed:number = Math.max( 0,this.getParam(this.drawingData.initialSpeed,this.drawingData.initialSpeedVariance,false));
    var angle = createjs.Matrix2D.DEG_TO_RAD * ( this.getParam(this.drawingData.initialDirection,this.drawingData.initialDirectionVariance,false));
    particle.vx = Math.cos(angle) * speed;
    particle.vy = Math.sin(angle) * speed;


    //  アルファ
    particle.startAlpha =  this.range( 0, 1, this.getParam(this.drawingData.startAlpha,this.drawingData.startAlphaVariance, false));
    particle.finishAlpha = this.range( 0, 1,this.getParam(this.drawingData.finishAlpha,this.drawingData.finishAlphaVariance, false));


    //  スケール
    particle.startScale =  Math.max( 0, this.getParam(this.drawingData.startScale,this.drawingData.startScaleVariance, false));
    particle.finishScale = Math.max( 0, this.getParam(this.drawingData.finishScale,this.drawingData.finishScaleVariance, false));

  }

  generateShape = (particle:Particle,shapeIdList:string[]) =>{

    particle.particleShape.removeAllChildren();

    let color = this.drawingData.startColor;

    let r = Math.floor(Math.random() *  this.drawingData.shapeIdList.length);
    let shapeId = ( this.drawingData.shapeIdList.length == 0 ) ? '' :  this.drawingData.shapeIdList[r]

    switch(shapeId) {
      case ParticleShapeTypes.Star:
        var shape:createjs.Shape = new createjs.Shape();

        shape.graphics.beginFill(color);
        shape.graphics.drawPolyStar(0,0,10,5,0.5,0);
        particle.particleShape.addChild(shape);
        break;
      case ParticleShapeTypes.Heart:

        var text:createjs.Text = new createjs.Text("♥","20px Arial",color);
        particle.particleShape.addChild(text);
        break;
      case ParticleShapeTypes.MailFace:

        var text:createjs.Text = new createjs.Text("〠","20px Arial",color);
        particle.particleShape.addChild(text);
        break;
      case ParticleShapeTypes.MailMark:
        var text:createjs.Text = new createjs.Text("〒","20px Arial",color);
        particle.particleShape.addChild(text);
        break;


      default:
        var shape:createjs.Shape = new createjs.Shape();

        shape.graphics.beginFill(color);
        shape.graphics.drawCircle(0,0,10);
        particle.particleShape.addChild(shape);
        break;
    }

  }

  range = (minValue,maxValue,value) : number =>{
    return Math.min( maxValue, Math.max( minValue, value ));
  }


  getParam = (value:any, variance:any, isInteger:boolean) : number => {
    let result = parseFloat(value) + (  Math.random() * parseFloat( variance )  ) - parseFloat( variance )  / 2;

    if( isInteger ) {
      return Math.floor(result);
    }

    return result;
  }

}