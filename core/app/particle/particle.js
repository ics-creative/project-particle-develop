///<reference path="../../typings/tsd.d.ts" />
System.register(["../data/color-data"], function(exports_1) {
    var color_data_1;
    var Particle;
    return {
        setters:[
            function (color_data_1_1) {
                color_data_1 = color_data_1_1;
            }],
        execute: function() {
            /**
             * Created by nyamogera on 2016/01/15.
             */
            Particle = (function () {
                function Particle() {
                    this.particleShape = new createjs.Container;
                    this.startColor = new color_data_1.ColorData();
                    this.finishColor = new color_data_1.ColorData();
                }
                return Particle;
            })();
            exports_1("Particle", Particle);
        }
    }
});
//# sourceMappingURL=particle.js.map