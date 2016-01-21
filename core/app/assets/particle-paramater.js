/**
 * Created by nyamogera on 2016/01/20.
 */
System.register([], function(exports_1) {
    var ParticleParamater;
    return {
        setters:[],
        execute: function() {
            ParticleParamater = (function () {
                function ParticleParamater() {
                    this.setting1 = {
                        name: "kirakira",
                        property: {
                            "bgColor": "#00000",
                            "width": 500,
                            "height": 500,
                            "friction": "0.058",
                            "startX": "252",
                            "startXVariance": "0",
                            "startY": "71",
                            "startYVariance": "148",
                            "lifeSpan": "136",
                            "lifeSpanVariance": "27",
                            "initialDirection": "283",
                            "initialDirectionVariance": "348",
                            "initialSpeed": "12.9",
                            "initialSpeedVariance": "1.6",
                            "accelerationSpeed": "0.7",
                            "accelerationDirection": "116.5",
                            "startAlpha": "1",
                            "startAlphaVariance": "0",
                            "finishAlpha": "0",
                            "finishAlphaVariance": 0.5,
                            "startScale": "0.18",
                            "startScaleVariance": "1",
                            "finishScale": "0",
                            "finishScaleVariance": "0",
                            "shapeIdList": ["blur_circle", "triangle", "circle", "reverse_blur_circle"],
                            "emitFrequency": "3",
                            "startColor": {
                                "hue": "170",
                                "hueVariance": 0,
                                "satuation": 75,
                                "satuationVariance": 0,
                                "luminance": 75,
                                "luminanceVariance": 0
                            },
                            "finishColor": {
                                "hue": 50,
                                "hueVariance": 0,
                                "satuation": 75,
                                "satuationVariance": 0,
                                "luminance": 75,
                                "luminanceVariance": 0
                            }
                        }
                    };
                    this.setting2 = {
                        name: "紫色のパーティクル",
                        description: "上方向に向かってうごく",
                        property: { "bgColor": "#00000", "width": "1024", "height": 744, "emitFrequency": "5", "lifeSpan": "50", "lifeSpanVariance": "196", "initialDirection": "0", "initialDirectionVariance": "360", "initialSpeed": "2", "initialSpeedVariance": "3.7", "friction": "0.038", "accelerationSpeed": "0.13", "accelerationDirection": "273.3", "startScale": "0.76", "startScaleVariance": "1", "finishScale": "0", "finishScaleVariance": "0", "startAlpha": "1", "startAlphaVariance": "0", "finishAlpha": "0.35", "finishAlphaVariance": 0.5, "startX": 505, "startXVariance": "594", "startY": 518, "startYVariance": "222", "shapeIdList": ["blur_circle", "circle"], "startColor": { "hue": "312", "hueVariance": "55", "satuation": "71", "satuationVariance": "78", "luminance": "83", "luminanceVariance": "16" }, "finishColor": { "hue": "0", "hueVariance": "0", "satuation": "54", "satuationVariance": 0, "luminance": "10", "luminanceVariance": 0 }, "blendMode": true, "alphaCurveType": "1" }
                    };
                    this.setting3 = {
                        name: "heart",
                        property: {
                            "bgColor": "#00000",
                            "width": 500,
                            "height": 500,
                            "emitFrequency": "3",
                            "lifeSpan": "136",
                            "lifeSpanVariance": "27",
                            "initialDirection": "49",
                            "initialDirectionVariance": "360",
                            "initialSpeed": "3.8",
                            "initialSpeedVariance": "7.4",
                            "friction": "0.063",
                            "accelerationSpeed": "0.142",
                            "accelerationDirection": "275.8",
                            "startScale": "0.93",
                            "startScaleVariance": "1",
                            "finishScale": "0",
                            "finishScaleVariance": "0",
                            "startAlpha": "1",
                            "startAlphaVariance": "0",
                            "finishAlpha": "0",
                            "finishAlphaVariance": 0.5,
                            "startX": "252",
                            "startXVariance": "128",
                            "startY": "360",
                            "startYVariance": "148",
                            "shapeIdList": ["blur_circle"],
                            "startColor": {
                                "hue": "17",
                                "hueVariance": "32",
                                "satuation": "91",
                                "satuationVariance": 0,
                                "luminance": "56",
                                "luminanceVariance": "16"
                            },
                            "finishColor": {
                                "hue": 50,
                                "hueVariance": 0,
                                "satuation": 75,
                                "satuationVariance": 0,
                                "luminance": 75,
                                "luminanceVariance": 0
                            }
                        }
                    };
                    this.setting4 = {
                        name: "fire",
                        property: {
                            "bgColor": "#00000",
                            "width": "819",
                            "height": "729",
                            "emitFrequency": "1",
                            "lifeSpan": "343",
                            "lifeSpanVariance": "188",
                            "initialDirection": "102",
                            "initialDirectionVariance": "360",
                            "initialSpeed": "1.4",
                            "initialSpeedVariance": "0.7",
                            "friction": "0.022",
                            "accelerationSpeed": "0.042",
                            "accelerationDirection": "280.6",
                            "startScale": "0.61",
                            "startScaleVariance": "1",
                            "finishScale": "0",
                            "finishScaleVariance": "0.17",
                            "startAlpha": "0.65",
                            "startAlphaVariance": "0.58",
                            "finishAlpha": "0",
                            "finishAlphaVariance": 0.5,
                            "startX": "420",
                            "startXVariance": "500",
                            "startY": "500",
                            "startYVariance": "172",
                            "shapeIdList": ["blur_circle"],
                            "startColor": {
                                "hue": "223",
                                "hueVariance": "0",
                                "satuation": "59",
                                "satuationVariance": 0,
                                "luminance": "73",
                                "luminanceVariance": 0
                            },
                            "finishColor": {
                                "hue": "261",
                                "hueVariance": 0,
                                "satuation": "100",
                                "satuationVariance": 0,
                                "luminance": 75,
                                "luminanceVariance": 0
                            }
                        }
                    };
                    this.list = [];
                    this.list.push(this.setting1);
                    this.list.push(this.setting2);
                    this.list.push(this.setting3);
                    this.list.push(this.setting4);
                }
                return ParticleParamater;
            })();
            exports_1("ParticleParamater", ParticleParamater);
        }
    }
});
//# sourceMappingURL=particle-paramater.js.map