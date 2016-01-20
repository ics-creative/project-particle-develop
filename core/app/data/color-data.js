/**
 * Created by nyamogera on 2016/01/20.
 */
System.register([], function(exports_1) {
    var ColorData;
    return {
        setters:[],
        execute: function() {
            ColorData = (function () {
                function ColorData() {
                    this.hue = 360;
                    this.hueVariance = 0;
                    this.satuation = 0;
                    this.satuationVariance = 0;
                    this.luminance = 100;
                    this.luminanceVariance = 0;
                }
                return ColorData;
            })();
            exports_1("ColorData", ColorData);
        }
    }
});
//# sourceMappingURL=color-data.js.map