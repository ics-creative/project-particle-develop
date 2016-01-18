/**
 * Created by nyamogera on 2016/01/16.
 */
System.register([], function(exports_1) {
    var ParticleShapeTypes;
    return {
        setters:[],
        execute: function() {
            ParticleShapeTypes = (function () {
                function ParticleShapeTypes() {
                }
                Object.defineProperty(ParticleShapeTypes, "Star", {
                    get: function () {
                        return "star";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ParticleShapeTypes, "Heart", {
                    get: function () {
                        return "heart";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ParticleShapeTypes, "MailFace", {
                    get: function () {
                        return "mail-face";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ParticleShapeTypes, "MailMark", {
                    get: function () {
                        return "mail-mark";
                    },
                    enumerable: true,
                    configurable: true
                });
                return ParticleShapeTypes;
            })();
            exports_1("ParticleShapeTypes", ParticleShapeTypes);
        }
    }
});
//# sourceMappingURL=particle-shape-types.js.map