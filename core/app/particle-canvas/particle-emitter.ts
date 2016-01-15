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

      particle.x = particle.x + particle.vx;
      particle.y = particle.y + particle.vy;

      particle.particleShape.x = particle.x;
      particle.particleShape.y = particle.y;

      var lifeParcent = particle.currentLife / particle.totalLife;

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
    let particle = this.generateParticle();
    this.container.addChild(particle.particleShape);
    this.activeParticles.push(particle);
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
   * パーティくるパラメータの設定
   * @param particle
   */
  private setParticleParamater(particle):void {

    particle.particleShape.removeAllChildren();

    particle.isAlive = true;
    particle.x = this.getParam(this.drawingData.startX, this.drawingData.startXVariance,false);
    particle.y = this.getParam(this.drawingData.startY, this.drawingData.startYVariance,false);

    var shape:createjs.Shape = new createjs.Shape();
    shape.graphics.beginFill("red");
    shape.graphics.drawCircle(0,0,10);

    particle.particleShape.addChild(shape);

    //  生存期間
    particle.totalLife = Math.max(1, this.getParam(this.drawingData.lifeSpan, this.drawingData.lifeSpanVariance,true));
    particle.currentLife = particle.totalLife;

    //  スピード
    var speed:number = this.getParam(this.drawingData.speed,this.drawingData.speedVariance,false);
    var angle = createjs.Matrix2D.DEG_TO_RAD * this.getParam(this.drawingData.angle,this.drawingData.angleVariance,false)
    particle.vx = Math.cos(angle) + speed;
    particle.vy = Math.sin(angle) + speed;


  }


  getParam = (value:number, variance:number, isInteger:boolean) : number => {
    let result = parseInt(value) + (  Math.random() * parseInt( variance )  ) - parseInt( variance )  / 2;

    if( isInteger ) {
      return Math.floor(result);
    }

    return result;
  }

}