System.register([], function(exports_1) {
    ///<reference path="../../libs-typescript/createjs/createjs.d.ts"/>
    "use strict";
    var ParticleExporter;
    return {
        setters:[],
        execute: function() {
            /**
             * Export SVG
             */
            ParticleExporter = (function () {
                function ParticleExporter(drawLayerContainer) {
                    this._drawLayerContainer = drawLayerContainer;
                }
                ParticleExporter.prototype.runExport = function (width, height) {
                    var _this = this;
                    this._width = width;
                    this._height = height;
                    return new Promise(function (onResolve, onReject) {
                        _this._exporter = new SVGExporter(_this._drawLayerContainer, _this._width, _this._height);
                        _this._exporter.run();
                        setTimeout(function () {
                            onResolve();
                        }, 1);
                    });
                };
                ParticleExporter.prototype.runExportSP = function (cavas) {
                    return new Promise(function (onResolve, onReject) {
                        var base64 = cavas.toDataURL();
                        cordova.base64ToGallery(base64, 'img_', function (msg) {
                            onResolve();
                            alert("画像ライブラリに保存しました。");
                        }, function (err) {
                            onReject();
                            alert("画像保存に失敗しました。");
                        });
                    });
                };
                ParticleExporter.prototype.getSVGString = function () {
                    var serializer = new XMLSerializer();
                    return serializer.serializeToString(this._exporter.svg);
                };
                return ParticleExporter;
            })();
            exports_1("ParticleExporter", ParticleExporter);
        }
    }
});
//# sourceMappingURL=particle-exporter.js.map