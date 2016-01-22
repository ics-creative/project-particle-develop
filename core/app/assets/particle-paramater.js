System.register([], function(exports_1) {
    "use strict";
    var ParticleParamater;
    return {
        setters:[],
        execute: function() {
            ParticleParamater = (function () {
                function ParticleParamater() {
                    this.setting0 = {
                        name: "Basic",
                        description: "プレーンなテンプレート",
                        imageId: "basic",
                        property: { "bgColor": "#00000", "width": 611.3333333333334, "height": 624.6666666666666, "emitFrequency": "1", "lifeSpan": "103", "lifeSpanVariance": "0", "initialDirection": "0", "initialDirectionVariance": "360", "initialSpeed": "7.5", "initialSpeedVariance": "0", "friction": "0", "accelerationSpeed": "0", "accelerationDirection": "0", "startScale": "0.5", "startScaleVariance": "0", "finishScale": "0", "finishScaleVariance": "0", "startAlpha": "1", "startAlphaVariance": "0", "finishAlpha": "1", "finishAlphaVariance": "0", "startX": 305.6666666666667, "startXVariance": "0", "startY": 312.3333333333333, "startYVariance": "0", "shapeIdList": ["circle"], "startColor": { "hue": "0", "hueVariance": "0", "satuation": "100", "satuationVariance": 0, "luminance": "50", "luminanceVariance": 0 }, "blendMode": false, "alphaCurveType": "0" }
                    };
                    this.setting1 = {
                        name: "グラフィック",
                        description: "綺羅びやかな雰囲気",
                        imageId: "graphic",
                        property: { "bgColor": "#724383", "width": 611.3333333333334, "height": 624.6666666666666, "emitFrequency": "2", "lifeSpan": "136", "lifeSpanVariance": "27", "initialDirection": "0", "initialDirectionVariance": "360", "initialSpeed": "3.5", "initialSpeedVariance": "7.7", "friction": "0.023", "accelerationSpeed": "0", "accelerationDirection": "116.5", "startScale": "0.3", "startScaleVariance": "1", "finishScale": "0.26", "finishScaleVariance": "0.54", "startAlpha": "0.69", "startAlphaVariance": "0.53", "finishAlpha": "0", "finishAlphaVariance": "0", "startX": 300, "startXVariance": "0", "startY": 307, "startYVariance": "0", "shapeIdList": ["circle", "reverse_blur_circle", "star"], "startColor": { "hue": "0", "hueVariance": "0", "satuation": "92", "satuationVariance": 0, "luminance": "100", "luminanceVariance": 0 }, "blendMode": true, "alphaCurveType": "0" }
                    };
                    this.setting2 = {
                        name: "紫色のパーティクル",
                        description: "上方向に向かってうごく",
                        imageId: "parple",
                        property: {
                            "bgColor": "#00000",
                            "width": "1024",
                            "height": 744,
                            "emitFrequency": "5",
                            "lifeSpan": "50",
                            "lifeSpanVariance": "196",
                            "initialDirection": "0",
                            "initialDirectionVariance": "360",
                            "initialSpeed": "2",
                            "initialSpeedVariance": "3.7",
                            "friction": "0.038",
                            "accelerationSpeed": "0.13",
                            "accelerationDirection": "273.3",
                            "startScale": "0.76",
                            "startScaleVariance": "1",
                            "finishScale": "0",
                            "finishScaleVariance": "0",
                            "startAlpha": "1",
                            "startAlphaVariance": "0",
                            "finishAlpha": "0.35",
                            "finishAlphaVariance": 0.5,
                            "startX": 505,
                            "startXVariance": "594",
                            "startY": 518,
                            "startYVariance": "222",
                            "shapeIdList": ["blur_circle", "circle"],
                            "startColor": {
                                "hue": "312",
                                "hueVariance": "55",
                                "satuation": "71",
                                "satuationVariance": "78",
                                "luminance": "83",
                                "luminanceVariance": "16"
                            },
                            "finishColor": {
                                "hue": "0",
                                "hueVariance": "0",
                                "satuation": "54",
                                "satuationVariance": 0,
                                "luminance": "10",
                                "luminanceVariance": 0
                            },
                            "blendMode": true,
                            "alphaCurveType": "1"
                        }
                    };
                    this.setting3 = {
                        name: "炎",
                        description: "焚き火",
                        imageId: "fire",
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
                        name: "魂",
                        description: "オーラ",
                        imageId: "spirit",
                        property: { "bgColor": "#00000", "width": "512", "height": " 512", "emitFrequency": "1", "lifeSpan": "343", "lifeSpanVariance": "188", "initialDirection": "102", "initialDirectionVariance": "360", "initialSpeed": "1.4", "initialSpeedVariance": "0.7", "friction": "0.022", "accelerationSpeed": "0.042", "accelerationDirection": "280.6", "startScale": "1", "startScaleVariance": "1", "finishScale": "0", "finishScaleVariance": "0.17", "startAlpha": "1", "startAlphaVariance": "0.58", "finishAlpha": "0", "finishAlphaVariance": 0.5, "startX": 253, "startXVariance": "178", "startY": 385, "startYVariance": "111", "shapeIdList": ["blur_circle"], "startColor": { "hue": "224", "hueVariance": "41", "satuation": "59", "satuationVariance": "0", "luminance": "85", "luminanceVariance": "18" }, "blendMode": true, "alphaCurveType": "1" }
                    };
                    this.setting5 = {
                        name: "Starts",
                        description: "散りばめられた星",
                        imageId: "star",
                        property: {
                            "bgColor": "#00000",
                            "width": 611.3333333333334,
                            "height": 624.6666666666666,
                            "emitFrequency": "3",
                            "lifeSpan": "59",
                            "lifeSpanVariance": "144",
                            "initialDirection": "0",
                            "initialDirectionVariance": "360",
                            "initialSpeed": "7.7",
                            "initialSpeedVariance": "10.3",
                            "friction": "0.0365",
                            "accelerationSpeed": "0.5215",
                            "accelerationDirection": "123.7",
                            "startScale": "0.68",
                            "startScaleVariance": "1",
                            "finishScale": "0",
                            "finishScaleVariance": "0.36",
                            "startAlpha": "1",
                            "startAlphaVariance": "0.1",
                            "finishAlpha": "0.47",
                            "finishAlphaVariance": 0.5,
                            "startX": 447,
                            "startXVariance": "0",
                            "startY": 135,
                            "startYVariance": "0",
                            "shapeIdList": ["star", "kirakira", "circle"],
                            "startColor": {
                                "hue": "294",
                                "hueVariance": "75",
                                "satuation": "57",
                                "satuationVariance": "55",
                                "luminance": "57",
                                "luminanceVariance": "56"
                            },
                            "finishColor": {
                                "hue": 50,
                                "hueVariance": 0,
                                "satuation": 75,
                                "satuationVariance": 0,
                                "luminance": 75,
                                "luminanceVariance": 0
                            },
                            "blendMode": true,
                            "alphaCurveType": "1"
                        }
                    };
                    this.setting6 = {
                        name: "Snow",
                        description: "散りばめられた星",
                        imageId: "snow",
                        property: {
                            "bgColor": "#00000",
                            "width": "628",
                            "height": "810",
                            "emitFrequency": "5",
                            "lifeSpan": "136",
                            "lifeSpanVariance": "500",
                            "initialDirection": "192.5",
                            "initialDirectionVariance": "148.5",
                            "initialSpeed": "6.4",
                            "initialSpeedVariance": "0",
                            "friction": "0.0035",
                            "accelerationSpeed": "0.0695",
                            "accelerationDirection": "87.7",
                            "startScale": "0.02",
                            "startScaleVariance": "0.63",
                            "finishScale": "0",
                            "finishScaleVariance": "0",
                            "startAlpha": "0.51",
                            "startAlphaVariance": "1",
                            "finishAlpha": "0",
                            "finishAlphaVariance": "0",
                            "startX": 684,
                            "startXVariance": "668",
                            "startY": -16,
                            "startYVariance": "378",
                            "shapeIdList": ["blur_circle"],
                            "startColor": {
                                "hue": "0",
                                "hueVariance": "0",
                                "satuation": "0",
                                "satuationVariance": 0,
                                "luminance": "100",
                                "luminanceVariance": "47"
                            },
                            "finishColor": {
                                "hue": 50,
                                "hueVariance": 0,
                                "satuation": 75,
                                "satuationVariance": 0,
                                "luminance": 75,
                                "luminanceVariance": 0
                            },
                            "blendMode": true,
                            "alphaCurveType": "0"
                        }
                    };
                    this.setting7 = {
                        name: "隕石",
                        description: "赤い火球の落下を想定",
                        imageId: "commet",
                        property: { "bgColor": "#00000", "width": 611.3333333333334, "height": 624.6666666666666, "emitFrequency": "5", "lifeSpan": "40", "lifeSpanVariance": "0", "initialDirection": "209.5", "initialDirectionVariance": "155", "initialSpeed": "2.6", "initialSpeedVariance": "3.8", "friction": "0.0085", "accelerationSpeed": "0.835", "accelerationDirection": "233.2", "startScale": "1", "startScaleVariance": "0.52", "finishScale": "0", "finishScaleVariance": "0", "startAlpha": "1", "startAlphaVariance": "0", "finishAlpha": "1", "finishAlphaVariance": "0", "startX": 320, "startXVariance": "0", "startY": 349, "startYVariance": "0", "shapeIdList": ["blur_circle"], "startColor": { "hue": "17", "hueVariance": "32", "satuation": "100", "satuationVariance": "45", "luminance": "56", "luminanceVariance": "19" }, "blendMode": true, "alphaCurveType": "0" }
                    };
                    this.setting8 = {
                        name: "ピンクの世界",
                        description: "ハートいっぱい現れる雰囲気",
                        imageId: "heart_world",
                        property: { "bgColor": "#00000", "width": 611.3333333333334, "height": 624.6666666666666, "emitFrequency": "1", "lifeSpan": "136", "lifeSpanVariance": "27", "initialDirection": "270", "initialDirectionVariance": "360", "initialSpeed": "1", "initialSpeedVariance": "0", "friction": "0.071", "accelerationSpeed": "0.1045", "accelerationDirection": "270", "startScale": "0.5", "startScaleVariance": "1", "finishScale": "0", "finishScaleVariance": "0", "startAlpha": "1", "startAlphaVariance": "0", "finishAlpha": "0.8", "finishAlphaVariance": "0", "startX": 309, "startXVariance": "597", "startY": 516, "startYVariance": "165", "shapeIdList": ["heart"], "startColor": { "hue": "335", "hueVariance": "0", "satuation": "78", "satuationVariance": "0", "luminance": "59", "luminanceVariance": "50" }, "blendMode": true, "alphaCurveType": "1" }
                    };
                    this.list = [];
                    this.list.push(this.setting0);
                    this.list.push(this.setting1);
                    this.list.push(this.setting2);
                    this.list.push(this.setting3);
                    this.list.push(this.setting4);
                    this.list.push(this.setting5);
                    this.list.push(this.setting6);
                    this.list.push(this.setting7);
                    this.list.push(this.setting8);
                }
                return ParticleParamater;
            })();
            exports_1("ParticleParamater", ParticleParamater);
        }
    }
});
//# sourceMappingURL=particle-paramater.js.map