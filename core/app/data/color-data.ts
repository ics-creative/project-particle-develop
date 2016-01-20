/**
 * Created by nyamogera on 2016/01/20.
 */

export class ColorData{
  hue:number;
  hueVariance:number;

  satuation:number;
  satuationVariance:number;

  luminance:number;
  luminanceVariance:number;

  constructor() {

    this.hue = 360;
    this.hueVariance = 0;

    this.satuation = 0;
    this.satuationVariance = 0;

    this.luminance = 100;
    this.luminanceVariance = 0;
  }
}
