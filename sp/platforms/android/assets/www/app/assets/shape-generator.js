/**
 * Created by 「asset-shapes.fla」/「generate-assets.jsfl」 on Wed Jan 20 2016
 * !!!!!このコードはJSFLから自動生成されたコードです。修正する場合はご注意ください。!!!!!
 */
System.register([], function(exports_1) {
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