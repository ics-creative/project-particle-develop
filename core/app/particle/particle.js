///<reference path="../../libs-typescript/createjs/createjs.d.ts"/>
System.register(["../data/color-data"], function(exports_1) {
    "use strict";
    var color_data_1;
    var Particle;
    return {
        setters:[
            function (color_data_1_1) {
                color_data_1 = color_data_1_1;
            }],
        execute: function() {
            /**
             * パーティクルエミッターのバリューオブジェクトのクラスです。
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