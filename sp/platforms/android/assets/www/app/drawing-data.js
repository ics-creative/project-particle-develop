System.register(["./particle-canvas/particle-shape-types"], function(exports_1) {
    var particle_shape_types_1;
    var DrawingData;
    return {
        setters:[
            function (particle_shape_types_1_1) {
                particle_shape_types_1 = particle_shape_types_1_1;
            }],
        execute: function() {
            DrawingData = (function () {
                function DrawingData() {
                    this.bgColor = "#00000";
                    this.width = 500;
                    this.height = 500;
                    this.friction = 0;
                    this.startColor = "#FFFFFF";
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
                    this.shapeIdList = [particle_shape_types_1.ParticleShapeTypes.Star, particle_shape_types_1.ParticleShapeTypes.MailFace, particle_shape_types_1.ParticleShapeTypes.Heart, particle_shape_types_1.ParticleShapeTypes.MailMark];
                    this.friction;
                    this.emitFrequency = 1;
                }
                return DrawingData;
            })();
            exports_1("DrawingData", DrawingData);
        }
    }
});
//# sourceMappingURL=data-drawing.js.map