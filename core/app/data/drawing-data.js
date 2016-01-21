System.register(["./color-data"], function(exports_1) {
    var color_data_1;
    var DrawingData;
    return {
        setters:[
            function (color_data_1_1) {
                color_data_1 = color_data_1_1;
            }],
        execute: function() {
            DrawingData = (function () {
                function DrawingData() {
                    this.bgColor = "";
                    this.width = 0.0;
                    this.height = 0.0;
                    this.emitFrequency = 0;
                    this.lifeSpan = 0;
                    this.lifeSpanVariance = 0;
                    this.initialDirection = 0;
                    this.initialDirectionVariance = 0;
                    this.initialSpeed = 0;
                    this.initialSpeedVariance = 0;
                    this.friction = 0;
                    this.accelerationSpeed = 0;
                    this.accelerationDirection = 0;
                    this.startScale = 0;
                    this.startScaleVariance = 0;
                    this.finishScale = 0;
                    this.finishScaleVariance = 0;
                    this.startAlpha = 0;
                    this.startAlphaVariance = 0;
                    this.finishAlpha = 0;
                    this.finishAlphaVariance = 0;
                    this.startX = 0;
                    this.startXVariance = 0;
                    this.startY = 0;
                    this.startYVariance = 0;
                    this.shapeIdList = ["kirakira"];
                    this.startColor = new color_data_1.ColorData();
                    this.finishColor = new color_data_1.ColorData();
                    this.blendMode = true;
                }
                DrawingData.prototype.into = function (obj) {
                    for (var key in this) {
                        if (this.hasOwnProperty(key)) {
                            var val = this[key];
                            this[key] = obj[key];
                        }
                    }
                };
                return DrawingData;
            })();
            exports_1("DrawingData", DrawingData);
        }
    }
});
//# sourceMappingURL=drawing-data.js.map