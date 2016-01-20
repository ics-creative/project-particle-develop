/**
 * Created by nyamogera on 2016/01/20.
 */

export class ParticleParamater{

  public list:Object[];
  constructor() {
    this.list = new Array();

    this.list.push( this.setting1 );
    this.list.push( this.setting2 );
    this.list.push( this.setting3 );
  }

  setting1 = {
    "bgColor": "#00000",
    "width": 500,
    "height": 500,
    "friction": "0.012",
    "startX": "240",
    "startXVariance": "380",
    "startY": "482",
    "startYVariance": 50,
    "lifeSpan": 100,
    "lifeSpanVariance": 30,
    "initialDirection": 270,
    "initialDirectionVariance": "0",
    "initialSpeed": "5.9",
    "initialSpeedVariance": "2.6",
    "accelerationSpeed": "0",
    "accelerationDirection": "137.1",
    "startAlpha": 1,
    "startAlphaVariance": 0,
    "finishAlpha": 1,
    "finishAlphaVariance": 0.5,
    "startScale": 1,
    "startScaleVariance": 0,
    "finishScale": "3.02",
    "finishScaleVariance": 0,
    "shapeIdList": [
      "kirakira"
    ],
    "emitFrequency": 1,
    "startColor": {
      "hue": 50,
      "hueVariance": 0,
      "satuation": 75,
      "satuationVariance": 0,
      "luminance": 83.57,
      "luminanceVariance": 0
    },
    "finishColor": {
      "hue": 327.98,
      "hueVariance": 0,
      "satuation": 75,
      "satuationVariance": 0,
      "luminance": 75,
      "luminanceVariance": 0
    }
  };

  setting2 = {
    "bgColor": "#00000",
    "width": 500,
    "height": 500,
    "friction": 0,
    "startX": 250,
    "startXVariance": "316",
    "startY": 250,
    "startYVariance": "296",
    "lifeSpan": "164.03",
    "lifeSpanVariance": 30,
    "initialDirection": 270,
    "initialDirectionVariance": 60,
    "initialSpeed": 0.5,
    "initialSpeedVariance": 0.5,
    "accelerationSpeed": 0,
    "accelerationDirection": 0,
    "startAlpha": "0.94",
    "startAlphaVariance": 0,
    "finishAlpha": "0.05",
    "finishAlphaVariance": "0.04",
    "startScale": "0.11",
    "startScaleVariance": 0,
    "finishScale": "2.6",
    "finishScaleVariance": 0,
    "shapeIdList": [
      "star_10"
    ],
    "emitFrequency": 1,
    "startColor": {
      "hue": "124.63",
      "hueVariance": 0,
      "satuation": 75,
      "satuationVariance": 0,
      "luminance": "88.5",
      "luminanceVariance": 0
    },
    "finishColor": {
      "hue": "269.59",
      "hueVariance": "274.8",
      "satuation": 75,
      "satuationVariance": 0,
      "luminance": 75,
      "luminanceVariance": 0
    }
  };

  setting3 = {
    "bgColor": "#00000",
    "width": 500,
    "height": "500",
    "friction": "0.021",
    "startX": "242",
    "startXVariance": "0",
    "startY": "396",
    "startYVariance": "0",
    "lifeSpan": 100,
    "lifeSpanVariance": 30,
    "initialDirection": 270,
    "initialDirectionVariance": "136.8",
    "initialSpeed": "6",
    "initialSpeedVariance": 0.5,
    "accelerationSpeed": 0,
    "accelerationDirection": 0,
    "startAlpha": 1,
    "startAlphaVariance": 0,
    "finishAlpha": "0",
    "finishAlphaVariance": "0",
    "startScale": "1.81",
    "startScaleVariance": 0,
    "finishScale": 1,
    "finishScaleVariance": 0,
    "shapeIdList": [
      "heart"
    ],
    "emitFrequency": 1,
    "startColor": {
      "hue": "355.74",
      "hueVariance": 0,
      "satuation": 75,
      "satuationVariance": 0,
      "luminance": 75,
      "luminanceVariance": 0
    },
    "finishColor": {
      "hue": "352.63",
      "hueVariance": 0,
      "satuation": 75,
      "satuationVariance": 0,
      "luminance": 75,
      "luminanceVariance": 0
    }
  }
}