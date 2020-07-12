import {Injectable} from '@angular/core';

@Injectable()
export class LocaleData {
  MA_head     = '';
  MA_sentence = '';

  H_about       = '';
  H_exportImage = '';
  H_exportParam = '';
  H_language    = '';

  preview_head  = '';
  settings_head = '';

  ST_head = '';

  SE_head                     = '';
  SE_startXVariance           = '';
  SE_startYVariance           = '';
  SE_initialSpeed             = '';
  SE_initialSpeedVariance     = '';
  SE_initialDirection         = '';
  SE_initialDirectionVariance = '';
  SE_friction                 = '';
  SE_accelerationSpeed        = '';
  SE_accelerationDirection    = '';
  SE_emitFrequency            = '';

  SP_head                       = '';
  SP_startScale         = '';
  SP_startScaleVariance = '';
  SP_endScale           = '';
  SP_endScaleVariance   = '';
  SP_lifeSpan           = '';
  SP_lifeSpanVariance   = '';

  SC_head_start         = '';
  SC_hue                = '';
  SC_hueVariance        = '';
  SC_saturation         = '';
  SC_saturationVariance = '';
  SC_luminance          = '';
  SC_luminanceVariance  = '';
  SC_startAlpha         = '';
  SC_startAlphaVariance = '';

  SC_head_end         = '';
  SC_endAlpha         = '';
  SC_endAlphaVariance = '';

  SC_head_alphaCurve = '';
  SC_head_blendMode  = '';

  SS_head = '';

  SF_head    = '';
  SF_stageW  = '';
  SF_stageH  = '';
  SF_bgColor = '';


  MC_head   = '';
  MC_button = '';
}
