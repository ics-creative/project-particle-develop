import {LocaleData} from "./locale-data";
"use strict";

export class LocaleJaData extends LocaleData {

  MA_head:string = "このサイトについて";
  MA_sentence:string = `
Particle Developは雪や炎などのパーティクル表現が作れるHTML5製のデザインツールです。
炎や雪の表現はベクターグラフィックとなっているので、保存したSVGファイルはAdobe Illustratorで配置したり、再編集できます。
ベクターのパーティクルデザインツールということが、他のツールにないParticle Developの特徴です。
※画像保存時にはブラウザのポップアップブロックを解除ください
※このツールで作成した画像ファイルやJSONファイルは個人・商用利用ともに無償でお使いいただけます。著作権はそれらを制作した方に帰属します。
  `;

  H_about:string = "このサイトについて";
  H_exportImage:string = "イメージの書き出し";
  H_exportParam:string = "パラメーター保存";
  H_language:string = "Language";

  preview_head:string = "プレビュー";
  settings_head:string = "設定";

  ST_head:string = "テンプレート設定";

  SE_head:string = "エミッター設定";
  SE_startXVariance:string = "発生位置 - X座標のばらつき (px)";
  SE_startYVariance:string = "発生位置 - Y座標のばらつき (px)";
  SE_initialSpeed:string = "初期速度 (px)";
  SE_initialSpeedVariance:string = "初期速度のばらつき";
  SE_initialDirection:string = "初期速度 - 方向 (度)";
  SE_initialDirectionVariance:string = "初期速度 - 方向のばらつき (度)";
  SE_friction:string = "摩擦";
  SE_accelerationSpeed:string = "重力";
  SE_accelerationDirection:string = "重力方向 (度)";
  SE_emitFrequency:string = "1秒あたりの発生数 (個/秒)"

  SP_head:string = "パーティクル設定";
  SP_startScale:string = "開始時のスケール";
  SP_startScaleVariance:string = "開始時のスケールのばらつき";
  SP_endScale:string = "終了時のスケール";
  SP_endScaleVariance:string = "終了時のスケールのばらつき";
  SP_lifeSpan:string = "ライフ (フレーム数)";
  SP_lifeSpanVariance:string = "ライフのばらつき (フレーム数)";

  SC_head_start:string = "開始色";
  SC_hue:string = "色相 (度)";
  SC_hueVariance:string = "色相のばらつき (度)";
  SC_saturation:string = "彩度 (%)";
  SC_saturationVariance:string = "彩度のばらつき (%)";
  SC_luminance:string = "明度 (%)";
  SC_luminanceVariance:string = "明度のばらつき (%)";
  SC_startAlpha:string = "開始時の透明度";
  SC_startAlphaVariance:string = "開始時の透明度のばらつき";

  SC_head_end:string = "終了色";
  SC_endAlpha:string = "終了時の透明度";
  SC_endAlphaVariance:string = "終了時の透明度のばらつき";

  SC_head_alphaCurve:string = "透明度の変化";
  SC_head_blendMode:string = "ブレンドモード";

  SS_head:string = "形状設定";

  SF_head:string = "ステージ設定";
  SF_stageW:string = "ステージの幅 (px)";
  SF_stageH:string = "ステージの高さ (px)";
  SF_bgColor:string = "背景色";

  MC_head:string = "パラメーター保存";
  MC_button:string = "ファイルとして保存 (.json)";
}