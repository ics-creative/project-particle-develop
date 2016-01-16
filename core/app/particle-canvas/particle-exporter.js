/**
 * Created by nyamogera on 2016/01/16.
 */
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
                        _this.exporter = new SVGExporter(_this.drawLayerContainer, false, false, false);
                        var t = new Date().getTime();
                        _this.exporter.run();
                        // for some reason, it takes a tick for the browser to init the SVG
                        setTimeout(_this.downloadFile, 1);
                    };
                    this.drawLayerContainer = drawLayerContainer;
                }
                ParticleExporter.prototype.downloadFile = function () {
                    var serializer = new XMLSerializer();
                    var svgStr = serializer.serializeToString(this.exporter.svg);
                    window.open("data:image/svg+xml,\n" + encodeURIComponent(svgStr));
                };
                return ParticleExporter;
            })();
            exports_1("ParticleExporter", ParticleExporter);
        }
    }
});
//# sourceMappingURL=particle-exporter.js.map