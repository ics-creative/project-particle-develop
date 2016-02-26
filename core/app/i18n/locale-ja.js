System.register(["./locale-data"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var locale_data_1;
    var LocaleJaData;
    return {
        setters:[
            function (locale_data_1_1) {
                locale_data_1 = locale_data_1_1;
            }],
        execute: function() {
            "use strict";
            LocaleJaData = (function (_super) {
                __extends(LocaleJaData, _super);
                function LocaleJaData() {
                    _super.apply(this, arguments);
                    this.MA_head = "このサイトについて";
                    this.MA_sentence = "\nParticle Develop\u306F\u96EA\u3084\u708E\u306A\u3069\u306E\u30D1\u30FC\u30C6\u30A3\u30AF\u30EB\u8868\u73FE\u304C\u4F5C\u308C\u308BHTML5\u88FD\u306E\u30C7\u30B6\u30A4\u30F3\u30C4\u30FC\u30EB\u3067\u3059\u3002\n\u708E\u3084\u96EA\u306E\u8868\u73FE\u306F\u30D9\u30AF\u30BF\u30FC\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u3068\u306A\u3063\u3066\u3044\u308B\u306E\u3067\u3001\u4FDD\u5B58\u3057\u305FSVG\u30D5\u30A1\u30A4\u30EB\u306FAdobe Illustrator\u3067\u914D\u7F6E\u3057\u305F\u308A\u3001\u518D\u7DE8\u96C6\u3067\u304D\u307E\u3059\u3002\n\u30D9\u30AF\u30BF\u30FC\u306E\u30D1\u30FC\u30C6\u30A3\u30AF\u30EB\u30C7\u30B6\u30A4\u30F3\u30C4\u30FC\u30EB\u3068\u3044\u3046\u3053\u3068\u304C\u3001\u4ED6\u306E\u30C4\u30FC\u30EB\u306B\u306A\u3044Particle Develop\u306E\u7279\u5FB4\u3067\u3059\u3002(\u753B\u50CF\u4FDD\u5B58\u6642\u306B\u306F\u30D6\u30E9\u30A6\u30B6\u306E\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u30D6\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u304F\u3060\u3055\u3044)\n  ";
                    this.H_about = "このサイトについて";
                    this.H_exportImage = "イメージの書き出し";
                    this.H_exportParam = "パラメーター保存 (.json)";
                    this.H_language = "Select Language (言語選択)";
                    this.preview_head = "プレビュー";
                    this.settings_head = "設定";
                    this.ST_head = "テンプレート設定";
                    this.SE_head = "エミッター設定";
                    this.SE_startXVariance = "発生位置 - X座標のばらつき (px)";
                    this.SE_startYVariance = "発生位置 - Y座標のばらつき (px)";
                    this.SE_initialSpeed = "初期速度 (px)";
                    this.SE_initialSpeedVariance = "初期速度のばらつき";
                    this.SE_initialDirection = "初期速度 - 方向 (度)";
                    this.SE_initialDirectionVariance = "初期速度 - 方向のばらつき (度)";
                    this.SE_friction = "摩擦";
                    this.SE_accelerationSpeed = "重力";
                    this.SE_accelerationDirection = "重力方向 (度)";
                    this.SE_emitFrequency = "1秒あたりの発生数 (個/秒)";
                    this.SP_head = "パーティクル設定";
                    this.SP_startScale = "開始時のスケール";
                    this.SP_startScaleVariance = "開始時のスケールのばらつき";
                    this.SP_endScale = "終了時のスケール";
                    this.SP_endScaleVariance = "終了時のスケールのばらつき";
                    this.SP_lifeSpan = "ライフ (フレーム数)";
                    this.SP_lifeSpanVariance = "ライフのばらつき (フレーム数)";
                    this.SC_head_start = "開始色";
                    this.SC_hue = "色相 (度)";
                    this.SC_hueVariance = "色相のばらつき (度)";
                    this.SC_saturation = "彩度 (%)";
                    this.SC_saturationVariance = "彩度のばらつき (%)";
                    this.SC_luminance = "明度 (%)";
                    this.SC_luminanceVariance = "明度のばらつき (%)";
                    this.SC_startAlpha = "開始時の透明度";
                    this.SC_startAlphaVariance = "開始時の透明度のばらつき";
                    this.SC_head_end = "終了色";
                    this.SC_endAlpha = "終了時の透明度";
                    this.SC_endAlphaVariance = "終了時の透明度のばらつき";
                    this.SC_head_alphaCurve = "透明度の変化";
                    this.SC_head_blendMode = "ブレンドモード";
                    this.SS_head = "形状設定";
                    this.SF_head = "ステージ設定";
                    this.SF_stageW = "ステージの幅 (px)";
                    this.SF_stageH = "ステージの高さ (px)";
                    this.SF_bgColor = "背景色";
                    this.MC_head = "パラメーター保存";
                    this.MC_button = "パラメーター保存 (.json)";
                }
                return LocaleJaData;
            }(locale_data_1.LocaleData));
            exports_1("LocaleJaData", LocaleJaData);
        }
    }
});
//# sourceMappingURL=locale-ja.js.map