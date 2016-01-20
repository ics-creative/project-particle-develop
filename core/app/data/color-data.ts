export class ColorData {
  hue:number;
  hueVariance:number;

  satuation:number;
  satuationVariance:number;

  luminance:number;
  luminanceVariance:number;

  constructor() {

    this.hue = 50;
    this.hueVariance = 0;

    this.satuation = 75;
    this.satuationVariance = 0;

    this.luminance = 75;
    this.luminanceVariance = 0;
  }
}
