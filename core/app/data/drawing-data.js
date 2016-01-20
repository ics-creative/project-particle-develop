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
                    this.bgColor = "#00000";
                    this.width = 500;
                    this.height = 500;
                    this.friction = 0;
                    this.startX = 250;
                    this.startXVariance = 50;
                    this.startY = 250;
                    this.startYVariance = 50;
                    this.lifeSpan = 100;
                    this.lifeSpanVariance = 30;
                    this.initialDirection = 270;
                    this.initialDirectionVariance = 60;
                    this.initialSpeed = 0.5;
                    this.initialSpeedVariance = 0.5;
                    this.accelerationSpeed = 0;
                    this.accelerationDirection = 0;
                    this.startAlpha = 1;
                    this.startAlphaVariance = 0;
                    this.finishAlpha = 1;
                    this.finishAlphaVariance = 0.5;
                    this.startScale = 1;
                    this.startScaleVariance = 0;
                    this.finishScale = 1;
                    this.finishScaleVariance = 0;
                    this.shapeIdList = ["square"];
                    this.emitFrequency = 1;
                    this.startColor = new color_data_1.ColorData();
                    this.finishColor = new color_data_1.ColorData();
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