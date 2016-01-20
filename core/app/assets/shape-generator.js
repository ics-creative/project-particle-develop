/**
 * Created by 「asset-shapes.fla」/「generate-assets.jsfl」 on Wed Jan 20 2016
 */
System.register([], function(exports_1) {
    var ShapeGenerator;
    return {
        setters:[],
        execute: function() {
            ShapeGenerator = (function () {
                function ShapeGenerator() {
                    this.assetList = ["blur_circle", "circle", "flower", "heart", "kirakira", "kirakira2", "reverse_blur_circle", "square", "star", "star_10", "triangle"];
                    this.shapeObjects = new Object();
                    this.shapeObjects["blur_circle"] = lib.blur_circle;
                    this.shapeObjects["circle"] = lib.circle;
                    this.shapeObjects["flower"] = lib.flower;
                    this.shapeObjects["heart"] = lib.heart;
                    this.shapeObjects["kirakira"] = lib.kirakira;
                    this.shapeObjects["kirakira2"] = lib.kirakira2;
                    this.shapeObjects["reverse_blur_circle"] = lib.reverse_blur_circle;
                    this.shapeObjects["square"] = lib.square;
                    this.shapeObjects["star"] = lib.star;
                    this.shapeObjects["star_10"] = lib.star_10;
                    this.shapeObjects["triangle"] = lib.triangle;
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