System.register([], function(exports_1) {
    "use strict";
    var ShapeGenerator;
    return {
        setters:[],
        execute: function() {
            ShapeGenerator = (function () {
                function ShapeGenerator() {
                    this.shapeObjects = window["lib"];
                }
                ShapeGenerator.prototype.generateShape = function (id) {
                    return new this.shapeObjects[id]();
                };
                return ShapeGenerator;
            })();
            exports_1("ShapeGenerator", ShapeGenerator);
        }
    }
});
//# sourceMappingURL=shape-generator.js.map