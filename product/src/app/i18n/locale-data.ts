import {Injectable} from '@angular/core';

@Injectable()
export class LocaleData {
  MA_head: string     = null;
  MA_sentence: string = null;

  H_about: string       = null;
  H_exportImage: string = null;
  H_exportParam: string = null;
  H_language: string    = null;

  preview_head: string  = null;
  settings_head: string = null;

  ST_head: string = null;

  SE_head: string                     = null;
  SE_startXVariance: string           = null;
  SE_startYVariance: string           = null;
  SE_initialSpeed: string             = null;
  SE_initialSpeedVariance: string     = null;
  SE_initialDirection: string         = null;
  SE_initialDirectionVariance: string = null;
  SE_friction: string                 = null;
  SE_accelerationSpeed: string        = null;
  SE_accelerationDirection: string    = null;
  SE_emitFrequency: string            = null;

  SP_startScale: string         = null;
  SP_startScaleVariance: string = null;
  SP_endScale: string           = null;
  SP_endScaleVariance: string   = null;
  SP_lifeSpan: string           = null;
  SP_lifeSpanVariance: string   = null;

  SC_head_start: string         = null;
  SC_hue: string                = null;
  SC_hueVariance: string        = null;
  SC_saturation: string         = null;
  SC_saturationVariance: string = null;
  SC_luminance: string          = null;
  SC_luminanceVariance: string  = null;
  SC_startAlpha: string         = null;
  SC_startAlphaVariance: string = null;

  SC_head_end: string         = null;
  SC_endAlpha: string         = null;
  SC_endAlphaVariance: string = null;

  SC_head_alphaCurve: string = null;
  SC_head_blendMode: string  = null;

  SS_head: string = null;

  SF_head: string    = null;
  SF_stageW: string  = null;
  SF_stageH: string  = null;
  SF_bgColor: string = null;


  MC_head: string   = null;
  MC_button: string = null;
}
