///<reference path="../../typings/tsd.d.ts" />
System.register([], function(exports_1) {
    var Particle;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by nyamogera on 2016/01/15.
             */
            Particle = (function () {
                function Particle() {
                    this.particleShape = new createjs.Container;
                }
                return Particle;
            })();
            exports_1("Particle", Particle);
        }
    }
});
//# sourceMappingURL=particle.js.map