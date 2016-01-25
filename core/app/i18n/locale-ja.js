System.register(["./locale-data"], function(exports_1) {
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
                    this.H_exportImage = "書き出し";
                    this.H_exportParam = "保存";
                    this.H_language = "言語選択";
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
                }
                return LocaleJaData;
            })(locale_data_1.LocaleData);
            exports_1("LocaleJaData", LocaleJaData);
        }
    }
});
//# sourceMappingURL=locale-ja.js.map