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
                        description: "This is Basic Template",
                        imageId: "basic",
                        property: { "bgColor": "#00000", "width": 481.3333333333333, "height": 366.6666666666667, "emitFrequency": "60", "lifeSpan": "103", "lifeSpanVariance": "0", "initialDirection": "0", "initialDirectionVariance": "360", "initialSpeed": "7.5", "initialSpeedVariance": "0", "friction": "0", "accelerationSpeed": "0", "accelerationDirection": "0", "startScale": "0.5", "startScaleVariance": "0", "finishScale": "0", "finishScaleVariance": "0", "startAlpha": "1", "startAlphaVariance": "0", "finishAlpha": "1", "finishAlphaVariance": "0", "startX": 240.66666666666666, "startXVariance": "0", "startY": 183.33333333333334, "startYVariance": "0", "shapeIdList": ["circle"], "startColor": { "hue": "0", "hueVariance": "0", "saturation": "100", "saturationVariance": 0, "luminance": "50", "luminanceVariance": 0 }, "blendMode": false, "alphaCurveType": "0" }
                    };
                    this.setting1 = {
                        name: "Abstract",
                        description: "シンプルに動く丸や星や四角形",
                        imageId: "graphic",
                        property: { "bgColor": "#724383", "width": 481.3333333333333, "height": 366.6666666666667, "emitFrequency": "60", "lifeSpan": "136", "lifeSpanVariance": "27", "initialDirection": "0", "initialDirectionVariance": "360", "initialSpeed": "3.5", "initialSpeedVariance": "7.7", "friction": "0.023", "accelerationSpeed": "0", "accelerationDirection": "116.5", "startScale": "0.3", "startScaleVariance": "1", "finishScale": "0.26", "finishScaleVariance": "0.54", "startAlpha": "0.69", "startAlphaVariance": "0.53", "finishAlpha": "0", "finishAlphaVariance": "0", "startX": 240.66666666666666, "startXVariance": "0", "startY": 183.33333333333334, "startYVariance": "0", "shapeIdList": ["circle", "reverse_blur_circle", "star"], "startColor": { "hue": "0", "hueVariance": "0", "saturation": "92", "saturationVariance": 0, "luminance": "100", "luminanceVariance": 0 }, "blendMode": true, "alphaCurveType": "0" }
                    };
                    this.setting2 = {
                        name: "Purple",
                        description: "紫の丸がキラキラしながら上方向に移動",
                        imageId: "parple",
                        property: { "bgColor": "#00000", "width": 481.3333333333333, "height": 366.6666666666667, "emitFrequency": "100", "lifeSpan": "50", "lifeSpanVariance": "196", "initialDirection": "0", "initialDirectionVariance": "360", "initialSpeed": "2", "initialSpeedVariance": "3.7", "friction": "0.038", "accelerationSpeed": "0.13", "accelerationDirection": "273.3", "startScale": "0.76", "startScaleVariance": "1", "finishScale": "0", "finishScaleVariance": "0", "startAlpha": "1", "startAlphaVariance": "0", "finishAlpha": "0.35", "finishAlphaVariance": 0.5, "startX": 240.66666666666666, "startXVariance": "594", "startY": 183.33333333333334, "startYVariance": "222", "shapeIdList": ["blur_circle", "circle"], "startColor": { "hue": "312", "hueVariance": "55", "saturation": "71", "saturationVariance": "78", "luminance": "83", "luminanceVariance": "16" }, "blendMode": true, "alphaCurveType": "1" }
                    };
                    this.setting3 = {
                        name: "Fire",
                        description: "赤いぼけ玉を上方向に移動",
                        imageId: "fire",
                        property: { "bgColor": "#00000", "width": 481.3333333333333, "height": 366.6666666666667, "emitFrequency": "200", "lifeSpan": "136", "lifeSpanVariance": "27", "initialDirection": "49", "initialDirectionVariance": "360", "initialSpeed": "3.8", "initialSpeedVariance": "7.4", "friction": "0.063", "accelerationSpeed": "0.142", "accelerationDirection": "275.8", "startScale": "0.93", "startScaleVariance": "1", "finishScale": "0", "finishScaleVariance": "0", "startAlpha": "1", "startAlphaVariance": "0", "finishAlpha": "0", "finishAlphaVariance": 0.5, "startX": 240.66666666666666, "startXVariance": "128", "startY": 183.33333333333334, "startYVariance": "148", "shapeIdList": ["blur_circle"], "startColor": { "hue": "17", "hueVariance": "32", "saturation": "91", "saturationVariance": 0, "luminance": "56", "luminanceVariance": "16" }, "blendMode": true, "alphaCurveType": "1" }
                    };
                    this.setting4 = {
                        name: "Spirit",
                        description: "白に近いぼけ玉をキラキラさせた",
                        imageId: "spirit",
                        property: { "bgColor": "#00000", "width": 481.3333333333333, "height": 366.6666666666667, "emitFrequency": "30", "lifeSpan": "343", "lifeSpanVariance": "188", "initialDirection": "102", "initialDirectionVariance": "360", "initialSpeed": "1.4", "initialSpeedVariance": "0.7", "friction": "0.022", "accelerationSpeed": "0.042", "accelerationDirection": "280.6", "startScale": "1", "startScaleVariance": "1", "finishScale": "0", "finishScaleVariance": "0.17", "startAlpha": "1", "startAlphaVariance": "0.58", "finishAlpha": "0", "finishAlphaVariance": 0.5, "startX": 240.66666666666666, "startXVariance": "178", "startY": 183.33333333333334, "startYVariance": "111", "shapeIdList": ["blur_circle"], "startColor": { "hue": "224", "hueVariance": "41", "saturation": "59", "saturationVariance": "0", "luminance": "85", "luminanceVariance": "18" }, "blendMode": true, "alphaCurveType": "1" }
                    };
                    this.setting5 = {
                        name: "Starts",
                        description: "紫色の星をランダムに配置",
                        imageId: "star",
                        property: { "bgColor": "#00000", "width": 481.3333333333333, "height": 366.6666666666667, "emitFrequency": "100", "lifeSpan": "27", "lifeSpanVariance": "93", "initialDirection": "0", "initialDirectionVariance": "360", "initialSpeed": "0", "initialSpeedVariance": "10", "friction": "0.008", "accelerationSpeed": "0.2915", "accelerationDirection": "129.5", "startScale": "0.98", "startScaleVariance": "1", "finishScale": "0.07", "finishScaleVariance": "0.23", "startAlpha": "1", "startAlphaVariance": "0", "finishAlpha": "0.34", "finishAlphaVariance": 0.5, "startX": 333, "startXVariance": "117", "startY": 98, "startYVariance": "107", "shapeIdList": ["blur_circle", "star", "circle", "kirakira"], "startColor": { "hue": "297", "hueVariance": "99", "saturation": "76", "saturationVariance": "0", "luminance": "77", "luminanceVariance": "46" }, "blendMode": true, "alphaCurveType": "1" }
                    };
                    this.setting6 = {
                        name: "Snow",
                        description: "白いボケ玉をランダムに移動",
                        imageId: "snow",
                        property: {
                            "bgColor": "#00000",
                            "width": "628",
                            "height": "810",
                            "emitFrequency": 300,
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
                                "saturation": "0",
                                "saturationVariance": 0,
                                "luminance": "100",
                                "luminanceVariance": "47"
                            },
                            "finishColor": {
                                "hue": 50,
                                "hueVariance": 0,
                                "saturation": 75,
                                "saturationVariance": 0,
                                "luminance": 75,
                                "luminanceVariance": 0
                            },
                            "blendMode": true,
                            "alphaCurveType": "0"
                        }
                    };
                    this.setting7 = {
                        name: "Commet",
                        description: "赤い火球の落下を想定",
                        imageId: "commet",
                        property: { "bgColor": "#00000", "width": 611.3333333333334, "height": 624.6666666666666, "emitFrequency": 300, "lifeSpan": "40", "lifeSpanVariance": "0", "initialDirection": "209.5", "initialDirectionVariance": "155", "initialSpeed": "2.6", "initialSpeedVariance": "3.8", "friction": "0.0085", "accelerationSpeed": "0.835", "accelerationDirection": "233.2", "startScale": "1", "startScaleVariance": "0.52", "finishScale": "0", "finishScaleVariance": "0", "startAlpha": "1", "startAlphaVariance": "0", "finishAlpha": "1", "finishAlphaVariance": "0", "startX": 320, "startXVariance": "0", "startY": 349, "startYVariance": "0", "shapeIdList": ["blur_circle"], "startColor": { "hue": "17", "hueVariance": "32", "saturation": "100", "saturationVariance": "45", "luminance": "56", "luminanceVariance": "19" }, "blendMode": true, "alphaCurveType": "0" }
                    };
                    this.setting8 = {
                        name: "Heart",
                        description: "ハートマークを上方向に移動",
                        imageId: "heart_world",
                        property: { "bgColor": "#00000", "width": 611.3333333333334, "height": 624.6666666666666, "emitFrequency": 60, "lifeSpan": "136", "lifeSpanVariance": "27", "initialDirection": "270", "initialDirectionVariance": "360", "initialSpeed": "1", "initialSpeedVariance": "0", "friction": "0.071", "accelerationSpeed": "0.1045", "accelerationDirection": "270", "startScale": "0.5", "startScaleVariance": "1", "finishScale": "0", "finishScaleVariance": "0", "startAlpha": "1", "startAlphaVariance": "0", "finishAlpha": "0.8", "finishAlphaVariance": "0", "startX": 309, "startXVariance": "597", "startY": 516, "startYVariance": "165", "shapeIdList": ["heart"], "startColor": { "hue": "335", "hueVariance": "0", "saturation": "78", "saturationVariance": "0", "luminance": "59", "luminanceVariance": "50" }, "blendMode": true, "alphaCurveType": "1" }
                    };
                    this.setting10 = {
                        name: "Blue Light",
                        description: "ハートマークを上方向に移動",
                        imageId: "blue_light",
                        property: { "width": 512, "height": 512, "startX": 146, "startY": 251, "bgColor": "#00000", "initialDirection": 0, "initialDirectionVariance": "360", "finishScale": 0.18, "finishScaleVariance": 0.68, "startAlpha": "1", "startAlphaVariance": "0", "emitFrequency": 129, "lifeSpan": 60, "lifeSpanVariance": 80, "initialSpeed": 18.8, "initialSpeedVariance": "3.7", "friction": 0.1165, "accelerationSpeed": 0.4705, "accelerationDirection": "360", "startScale": 0.88, "startScaleVariance": "1", "finishAlpha": 0.51, "finishAlphaVariance": 0.5, "startXVariance": 73, "startYVariance": 43, "shapeIdList": ["circle", "blur_circle"], "startColor": { "hue": 195, "hueVariance": 21, "saturation": 70, "saturationVariance": "0", "luminance": 77, "luminanceVariance": 37 }, "blendMode": true, "alphaCurveType": "1" }
                    };
                    this.setting9 = {
                        name: "Sparticle",
                        description: "星やぼけ玉を使用し、ちらつき",
                        imageId: "green_kirakira",
                        property: { "bgColor": "#00000", "width": 481.3333333333333, "height": 366.6666666666667, "emitFrequency": "38", "lifeSpan": "27", "lifeSpanVariance": "93", "initialDirection": "0", "initialDirectionVariance": "0", "initialSpeed": "0", "initialSpeedVariance": "0", "friction": "0", "accelerationSpeed": "0", "accelerationDirection": "0", "startScale": "0.98", "startScaleVariance": "1", "finishScale": "0.07", "finishScaleVariance": "0.23", "startAlpha": "1", "startAlphaVariance": "0", "finishAlpha": "0.34", "finishAlphaVariance": 0.5, "startX": 240.66666666666666, "startXVariance": "570", "startY": 183.33333333333334, "startYVariance": "98", "shapeIdList": ["blur_circle", "kirakira2", "kirakira", "star"], "startColor": { "hue": "88", "hueVariance": "99", "saturation": "76", "saturationVariance": "0", "luminance": "77", "luminanceVariance": "46" }, "blendMode": true, "alphaCurveType": "1" }
                    };
                    this.list = [];
                    this.list.push(this.setting2);
                    this.list.push(this.setting0);
                    this.list.push(this.setting3);
                    this.list.push(this.setting4);
                    this.list.push(this.setting9);
                    this.list.push(this.setting5);
                    this.list.push(this.setting6);
                    this.list.push(this.setting7);
                    this.list.push(this.setting8);
                    this.list.push(this.setting10);
                    this.list.push(this.setting1);
                }
                return ParticleParamater;
            })();
            exports_1("ParticleParamater", ParticleParamater);
        }
    }
});
//# sourceMappingURL=particle-paramater.js.map