System.register([], function(exports_1) {
    var ColorData;
    return {
        setters:[],
        execute: function() {
            ColorData = (function () {
                function ColorData() {
                    this.hue = 50;
                    this.hueVariance = 0;
                    this.satuation = 75;
                    this.satuationVariance = 0;
                    this.luminance = 75;
                    this.luminanceVariance = 0;
                }
                return ColorData;
            })();
            exports_1("ColorData", ColorData);
        }
    }
});
//# sourceMappingURL=color-data.js.map