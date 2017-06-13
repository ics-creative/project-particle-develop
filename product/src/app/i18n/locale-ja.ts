import {LocaleData} from './locale-data';

export class LocaleJaData extends LocaleData {

  MA_head     = 'このサイトについて';
  MA_sentence = `
Particle Developは雪や炎などのパーティクル表現が作れるHTML5製のデザインツールです。
炎や雪の表現はベクターグラフィックとなっているので、保存したSVGファイルはAdobe Illustratorで配置したり、再編集できます。
ベクターのパーティクルデザインツールということが、他のツールにないParticle Developの特徴です。
※画像保存時にはブラウザのポップアップブロックを解除ください
※このツールで作成した画像ファイルやJSONファイルは個人・商用利用ともに無償でお使いいただけます。著作権はそれらを制作した方に帰属します。
  `;

  H_about       = 'このサイトについて';
  H_exportImage = 'イメージの書き出し';
  H_exportParam = 'パラメーター保存';
  H_language    = 'Language';

  preview_head  = 'プレビュー';
  settings_head = '設定';

  ST_head = 'テンプレート設定';

  SE_head                     = 'エミッター設定';
  SE_startXVariance           = '発生位置 - X座標のばらつき (px)';
  SE_startYVariance           = '発生位置 - Y座標のばらつき (px)';
  SE_initialSpeed             = '初期速度 (px)';
  SE_initialSpeedVariance     = '初期速度のばらつき';
  SE_initialDirection         = '初期速度 - 方向 (度)';
  SE_initialDirectionVariance = '初期速度 - 方向のばらつき (度)';
  SE_friction                 = '摩擦';
  SE_accelerationSpeed        = '重力';
  SE_accelerationDirection    = '重力方向 (度)';
  SE_emitFrequency            = '1秒あたりの発生数 (個/秒)';

  SP_head               = 'パーティクル設定';
  SP_startScale         = '開始時のスケール';
  SP_startScaleVariance = '開始時のスケールのばらつき';
  SP_endScale           = '終了時のスケール';
  SP_endScaleVariance   = '終了時のスケールのばらつき';
  SP_lifeSpan           = 'ライフ (フレーム数)';
  SP_lifeSpanVariance   = 'ライフのばらつき (フレーム数)';

  SC_head_start         = '開始色';
  SC_hue                = '色相 (度)';
  SC_hueVariance        = '色相のばらつき (度)';
  SC_saturation         = '彩度 (%)';
  SC_saturationVariance = '彩度のばらつき (%)';
  SC_luminance          = '明度 (%)';
  SC_luminanceVariance  = '明度のばらつき (%)';
  SC_startAlpha         = '開始時の透明度';
  SC_startAlphaVariance = '開始時の透明度のばらつき';

  SC_head_end         = '終了色';
  SC_endAlpha         = '終了時の透明度';
  SC_endAlphaVariance = '終了時の透明度のばらつき';

  SC_head_alphaCurve = '透明度の変化';
  SC_head_blendMode  = 'ブレンドモード';

  SS_head = '形状設定';

  SF_head    = 'ステージ設定';
  SF_stageW  = 'ステージの幅 (px)';
  SF_stageH  = 'ステージの高さ (px)';
  SF_bgColor = '背景色';

  MC_head   = 'パラメーター保存';
  MC_button = 'ファイルとして保存 (.json)';
}
