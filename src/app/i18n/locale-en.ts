import {LocaleData} from './locale-data';

export class LocaleEnData extends LocaleData {

  MA_head     = 'What is Particle Develop';
  MA_sentence = `Particle Develop is the design tool available to create
                particle graphics such as snow and fire.
                The graphic of particles are vector,
                you can save as SVG file, and edit with Adobe Illustrator.`;

  H_about       = 'About';
  H_exportImage = 'Export as File';
  H_exportParam = 'Save Config Data';
  H_language    = 'Language';

  preview_head  = 'Preview';
  settings_head = 'Settings';

  ST_head = 'Template Settings';

  SE_head                     = 'Emitter Settings';
  SE_startXVariance           = 'Source Position Variance X (px)';
  SE_startYVariance           = 'Source Position Variance Y (px)';
  SE_initialSpeed             = 'Speed (px/frame)';
  SE_initialSpeedVariance     = 'Speed Variance (px/frame)';
  SE_initialDirection         = 'Emit Angle (degree)';
  SE_initialDirectionVariance = 'Emit Angle Variance (degree)';
  SE_friction                 = 'Friction';
  SE_accelerationSpeed        = 'Gravity';
  SE_accelerationDirection    = 'Gravity Angle (degree)';
  SE_emitFrequency            = 'Emit Frequency (num/sec)';

  SP_head               = 'Particle Settings';
  SP_startScale         = 'Start Size';
  SP_startScaleVariance = 'Start Size Variance';
  SP_endScale           = 'End Size';
  SP_endScaleVariance   = 'End Size Variance';
  SP_lifeSpan           = 'Lifespan (frame)';
  SP_lifeSpanVariance   = 'Lifespan Variance (frame)';

  SC_head_start         = 'Start Color';
  SC_hue                = 'Hue (degree)';
  SC_hueVariance        = 'Hue Variance (degree)';
  SC_saturation         = 'Saturation (%)';
  SC_saturationVariance = 'Saturation Variance (%)';
  SC_luminance          = 'Luminance (%)';
  SC_luminanceVariance  = 'Luminance Variance (%)';
  SC_startAlpha         = 'Alpha';
  SC_startAlphaVariance = 'Alpha Variance';

  SC_head_end         = 'End Color';
  SC_endAlpha         = 'Alpha';
  SC_endAlphaVariance = 'Alpha Variance';

  SC_head_alphaCurve = 'Alpha Motion Type';
  SC_head_blendMode  = 'Blend Mode';

  SS_head = 'Shape Settings';

  SF_head    = 'Stage Settings';
  SF_stageW  = 'Width (px)';
  SF_stageH  = 'Height (px)';
  SF_bgColor = 'Background Color';


  MC_head   = 'Save Config Data';
  MC_button = 'Save as File (.json)';
}
