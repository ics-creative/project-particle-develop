///<reference path="../../typings/tsd.d.ts" />
System.register([], function(exports_1) {
    var ParticleExporter;
    return {
        setters:[],
        execute: function() {
            /**
             * Export SVG
             */
            ParticleExporter = (function () {
                function ParticleExporter(drawLayerContainer) {
                    var _this = this;
                    this.runExport = function () {
                        return new Promise(function (onResolve, onReject) {
                            _this.exporter = new SVGExporter(_this.drawLayerContainer, false, false, false);
                            var t = new Date().getTime();
                            _this.exporter.run();
                            // for some reason, it takes a tick for the browser to init the SVG
                            setTimeout(function () { onResolve(); }, 1);
                        });
                    };
                    this.runExportSP = function (cavas) {
                        return new Promise(function (onResolve, onReject) {
                            var base64 = cavas.toDataURL();
                            cordova.base64ToGallery(base64, 'img_', function (msg) {
                            }, function (err) {
                            });
                            // for some reason, it takes a tick for the browser to init the SVG
                            setTimeout(function () { onResolve(); }, 1);
                        });
                    };
                    this.downloadFile = function () {
                        var serializer = new XMLSerializer();
                        var svgStr = serializer.serializeToString(_this.exporter.svg);
                        window.open("data:image/svg+xml,\n" + encodeURIComponent(svgStr));
                    };
                    this.drawLayerContainer = drawLayerContainer;
                }
                ParticleExporter.prototype.getSVGString = function () {
                    var serializer = new XMLSerializer();
                    return serializer.serializeToString(this.exporter.svg);
                };
                return ParticleExporter;
            })();
            exports_1("ParticleExporter", ParticleExporter);
        }
    }
});
//# sourceMappingURL=particle-exporter.js.map