///<reference path="../../typings/tsd.d.ts" />

/**
 * Created by nyamogera on 2016/01/15.
 */

export class Particle{

	/** パーティクルの形状です。 */
	public particleShape:createjs.Container;

	/** パーティクルが生きているかのフラグです。 */
	public isAlive:boolean;
	/** パーティクルの現在の残り生存期間（フレーム数）です。 */
	public currentLife:number;
	/** パーティクルの生存期間（フレーム数）です。 */
	public totalLife:number;

	/** パーティクルのスケールです */
	public currentScale:number;
	/** パーティクルの開始時のサイズです */
	public startScale:number;
	/** パーティクルの終了時のサイズです */
	public finishScale:number;

	/** パーティクルの現在のx位置です。 */
	public x:number;
	/** パーティクルの現在のy位置です。 */
	public y:number;

	/** パーティクルの向かっている位置です。 */
	public vx:number;
	/** パーティクルの向かっている位置です。 */
	public vy:number;

	/** パーティクルの開始時の色です */
	public startColor:string;
	/** パーティクルの終了時の色です */
	public finishColor:string;

	/** アルファのイージング関数です。 */
	public easingAlpha:(life:number)=>number;
	/** 開始アルファ値です0〜1.0の間になります。 */
	public startAlpha:number;
	/** 終了時のアルファ値です0〜1.0の間になります。 */
	public finishAlpha:number;

  /** スケールのイージング関数です。 */
  public easingScale:(life:number)=>number;
  /** 開始スケール値です0〜1.0の間になります。 */
  public startScale:number;
  /** 終了時のスケール値です0〜1.0の間になります。 */
  public finishScale:number;


	constructor() {
    this.particleShape = new createjs.Container;
	}
}