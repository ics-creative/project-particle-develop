System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LocaleData;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            "use strict";
            LocaleData = (function () {
                function LocaleData() {
                    this.MA_head = null;
                    this.MA_sentence = null;
                    this.H_about = null;
                    this.H_exportImage = null;
                    this.H_exportParam = null;
                    this.H_language = null;
                    this.preview_head = null;
                    this.settings_head = null;
                    this.ST_head = null;
                    this.SE_head = null;
                    this.SE_startXVariance = null;
                    this.SE_startYVariance = null;
                    this.SE_initialSpeed = null;
                    this.SE_initialSpeedVariance = null;
                    this.SE_initialDirection = null;
                    this.SE_initialDirectionVariance = null;
                    this.SE_friction = null;
                    this.SE_accelerationSpeed = null;
                    this.SE_accelerationDirection = null;
                    this.SE_emitFrequency = null;
                    this.SP_startScale = null;
                    this.SP_startScale = null;
                    this.SP_startScaleVariance = null;
                    this.SP_endScale = null;
                    this.SP_endScaleVariance = null;
                    this.SP_lifeSpan = null;
                    this.SP_lifeSpanVariance = null;
                    this.SC_head_start = null;
                    this.SC_hue = null;
                    this.SC_hueVariance = null;
                    this.SC_saturation = null;
                    this.SC_saturationVariance = null;
                    this.SC_luminance = null;
                    this.SC_luminanceVariance = null;
                    this.SC_startAlpha = null;
                    this.SC_startAlphaVariance = null;
                    this.SC_head_end = null;
                    this.SC_endAlpha = null;
                    this.SC_endAlphaVariance = null;
                    this.SC_head_alphaCurve = null;
                    this.SC_head_blendMode = null;
                    this.SS_head = null;
                    this.SF_head = null;
                    this.SF_stageW = null;
                    this.SF_stageH = null;
                    this.SF_bgColor = null;
                }
                LocaleData = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LocaleData);
                return LocaleData;
            })();
            exports_1("LocaleData", LocaleData);
        }
    }
});
//# sourceMappingURL=locale-data.js.map