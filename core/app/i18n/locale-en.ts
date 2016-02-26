import {LocaleData} from "./locale-data";
"use strict";

export class LocaleEnData extends LocaleData {

  MA_head:string = "What is Particle Develop";
  MA_sentence:string = `Particle Develop is the design tool what is able to create particle graphics such as snow and fire.
  The graphic of particles are vector, you can save as SVG file, and edit with Adobe Illustrator. * Please turn off the popup block of browser, if you save file.
  `;

  H_about:string = "About";
  H_exportImage:string = "Export as File";
  H_exportParam:string = "Save Config Data (.json)";
  H_language:string = "Select Language (言語選択)";

  preview_head:string = "Preview";
  settings_head:string = "Settings";

  ST_head:string = "Template Settings";

  SE_head:string = "Emitter Settings";
  SE_startXVariance:string = "Source Position Variance X (px)";
  SE_startYVariance:string = "Source Position Variance Y (px)";
  SE_initialSpeed:string = "Speed (px/frame)";
  SE_initialSpeedVariance:string = "Speed Variance (px/frame)";
  SE_initialDirection:string = "Emit Angle (degree)";
  SE_initialDirectionVariance:string = "Emit Angle Variance (degree)";
  SE_friction:string = "Friction";
  SE_accelerationSpeed:string = "Gravity";
  SE_accelerationDirection:string = "Gravity Angle (degree)";
  SE_emitFrequency:string = "Emit Frequency (num/sec)"

  SP_head:string = "Particle Settings";
  SP_startScale:string = "Start Size";
  SP_startScaleVariance:string = "Start Size Variance";
  SP_endScale:string = "End Size";
  SP_endScaleVariance:string = "End Size Variance";
  SP_lifeSpan:string = "Lifespan (frame)";
  SP_lifeSpanVariance:string = "Lifespan Variance (frame)";

  SC_head_start:string = "Start Color";
  SC_hue:string = "Hue (degree)";
  SC_hueVariance:string = "Hue Variance (degree)";
  SC_saturation:string = "Saturation (%)";
  SC_saturationVariance:string = "Saturation Variance (%)";
  SC_luminance:string = "Luminance (%)";
  SC_luminanceVariance:string = "Luminance Variance (%)";
  SC_startAlpha:string = "Alpha";
  SC_startAlphaVariance:string = "Alpha Variance";

  SC_head_end:string = "End Color";
  SC_endAlpha:string = "Alpha";
  SC_endAlphaVariance:string = "Alpha Variance";

  SC_head_alphaCurve:string = "Alpha Motion Type";
  SC_head_blendMode:string = "Blend Mode";

  SS_head:string = "Shape Settings";

  SF_head:string = "Stage Settings";
  SF_stageW:string = "Width (px)";
  SF_stageH:string = "Height (px)";
  SF_bgColor:string = "Background Color";


  MC_head:string = "Save Config Data";
  MC_button:string = "Save Config Data (.json)";
}