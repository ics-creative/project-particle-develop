System.register(["./particle", "../assets/shape-generator"], function(exports_1) {
    var particle_1, shape_generator_1;
    var ParticleEmitter;
    return {
        setters:[
            function (particle_1_1) {
                particle_1 = particle_1_1;
            },
            function (shape_generator_1_1) {
                shape_generator_1 = shape_generator_1_1;
            }],
        execute: function() {
            "use strict";
            ParticleEmitter = (function () {
                function ParticleEmitter() {
                    this.particlesPool = [];
                    this.activeParticles = [];
                    this.container = new createjs.Container();
                    // パフォーマンス向上の基本テクニック
                    this.container.mouseChildren = false;
                    this.container.mouseEnabled = false;
                    this.shapeGenerator = new shape_generator_1.ShapeGenerator();
                }
                ParticleEmitter.prototype.update = function (drawingData) {
                    this.drawingData = drawingData;
                    this.emit();
                    this.animate();
                    this.lifeCheck();
                };
                /**
                 * パーティクルの動き。
                 */
                ParticleEmitter.prototype.animate = function () {
                    var rad = createjs.Matrix2D.DEG_TO_RAD * this.drawingData.accelerationDirection;
                    var accX = Math.cos(rad) * this.drawingData.accelerationSpeed;
                    var accY = Math.sin(rad) * this.drawingData.accelerationSpeed;
                    for (var i = 0; i < this.activeParticles.length; i++) {
                        var particle = this.activeParticles[i];
                        particle.currentLife--;
                        particle.vx = particle.vx + accX;
                        particle.vy = particle.vy + accY;
                        particle.vx = particle.vx * (1 - this.drawingData.friction);
                        particle.vy = particle.vy * (1 - this.drawingData.friction);
                        particle.x = particle.x + particle.vx;
                        particle.y = particle.y + particle.vy;
                        particle.particleShape.x = particle.x;
                        particle.particleShape.y = particle.y;
                        var lifeParcent = Math.max(particle.currentLife, 0) / particle.totalLife;
                        var alpha = particle.finishAlpha + (particle.startAlpha - particle.finishAlpha) * lifeParcent;
                        particle.particleShape.alpha = alpha;
                        var scale = particle.finishScale + (particle.startScale - particle.finishScale) * lifeParcent;
                        particle.particleShape.scaleX = particle.particleShape.scaleY = scale;
                        if (particle.colorCommand) {
                            var hue = particle.startColor.hue + (particle.startColor.hue - particle.finishColor.hue) * lifeParcent;
                            var satuation = particle.startColor.satuation + (particle.startColor.satuation - particle.finishColor.satuation) * lifeParcent;
                            var luminance = particle.startColor.luminance + (particle.startColor.luminance - particle.finishColor.luminance) * lifeParcent;
                            var color = "hsl(" + hue + ", " + satuation + "%, " + luminance + "%)";
                            particle.colorCommand.style = color;
                        }
                        //  パーティクルが死んでいたら、オブジェクトプールに移動
                        if (particle.currentLife < 0) {
                            particle.isAlive = false;
                        }
                    }
                };
                /**
                 * パーティクルが生きているか確認する。
                 */
                ParticleEmitter.prototype.lifeCheck = function () {
                    for (var i = 0; i < this.activeParticles.length; i++) {
                        // もしも死んでいたら、アクティブリストから外してプールに保存する。
                        if (!this.activeParticles[i].isAlive) {
                            var particle = this.activeParticles[i];
                            this.container.removeChild(particle.particleShape);
                            this.activeParticles.splice(i, 1);
                            this.particlesPool.push(particle);
                            i--;
                        }
                    }
                };
                /**
                 * パーティクルの生成（インターバルチェックする）
                 */
                ParticleEmitter.prototype.emit = function () {
                    for (var i = 0; i < this.drawingData.emitFrequency; i++) {
                        var particle = this.generateParticle();
                        this.container.addChild(particle.particleShape);
                        this.activeParticles.push(particle);
                    }
                };
                /**
                 * パーティクルのパラメータを設定します
                 * @returns {null}
                 */
                ParticleEmitter.prototype.generateParticle = function () {
                    var particle = null;
                    if (this.particlesPool.length >= 1) {
                        particle = this.particlesPool.shift();
                    }
                    else {
                        particle = new particle_1.Particle();
                    }
                    this.setParticleParamater(particle);
                    return particle;
                };
                /**
                 * パーティクルパラメータの設定
                 * @param particle
                 */
                ParticleEmitter.prototype.setParticleParamater = function (particle) {
                    particle.particleShape.removeAllChildren();
                    particle.isAlive = true;
                    particle.x = this.getParam(this.drawingData.startX, this.drawingData.startXVariance, false);
                    particle.y = this.getParam(this.drawingData.startY, this.drawingData.startYVariance, false);
                    this.generateShape(particle, this.drawingData.shapeIdList);
                    //  生存期間
                    particle.totalLife = Math.max(1, this.getParam(this.drawingData.lifeSpan, this.drawingData.lifeSpanVariance, true));
                    particle.currentLife = particle.totalLife;
                    //  スピード
                    var speed = Math.max(0, this.getParam(this.drawingData.initialSpeed, this.drawingData.initialSpeedVariance, false));
                    var angle = createjs.Matrix2D.DEG_TO_RAD * (this.getParam(this.drawingData.initialDirection, this.drawingData.initialDirectionVariance, false));
                    particle.vx = Math.cos(angle) * speed;
                    particle.vy = Math.sin(angle) * speed;
                    //  アルファ
                    particle.startAlpha = this.range(0, 1, this.getParam(this.drawingData.startAlpha, this.drawingData.startAlphaVariance, false));
                    particle.finishAlpha = this.range(0, 1, this.getParam(this.drawingData.finishAlpha, this.drawingData.finishAlphaVariance, false));
                    //  スケール
                    particle.startScale = Math.max(0, this.getParam(this.drawingData.startScale, this.drawingData.startScaleVariance, false));
                    particle.finishScale = Math.max(0, this.getParam(this.drawingData.finishScale, this.drawingData.finishScaleVariance, false));
                };
                ParticleEmitter.prototype.generateShape = function (particle, shapeIdList) {
                    particle.particleShape.removeAllChildren();
                    var startColor = this.drawingData.startColor;
                    var finishColor = this.drawingData.finishColor;
                    particle.startColor.hue = this.getParam(startColor.hue, startColor.hueVariance, false) % 360;
                    particle.startColor.luminance = this.getParam(startColor.luminance, startColor.luminanceVariance, false);
                    particle.startColor.satuation = this.getParam(startColor.satuation, startColor.satuationVariance, false);
                    particle.finishColor.hue = this.getParam(finishColor.hue, finishColor.hueVariance, false) % 360;
                    particle.finishColor.luminance = this.getParam(finishColor.luminance, finishColor.luminanceVariance, false);
                    particle.finishColor.satuation = this.getParam(finishColor.satuation, finishColor.satuationVariance, false);
                    var hue = parseInt(particle.startColor.hue);
                    var satuation = parseInt(particle.startColor.satuation);
                    var luminance = parseInt(particle.startColor.luminance);
                    var color = "hsl(" + hue + ", " + satuation + "%, " + luminance + "%)";
                    var r = Math.floor(Math.random() * this.drawingData.shapeIdList.length);
                    var shapeId = (this.drawingData.shapeIdList.length == 0) ? '' : this.drawingData.shapeIdList[r];
                    particle.colorCommand = null;
                    var shape = this.shapeGenerator.generateShape(shapeId);
                    if (shape.hasOwnProperty("command")) {
                        var myShape = shape.command;
                        myShape.style = color;
                        particle.colorCommand = shape.command;
                    }
                    particle.particleShape.addChild(shape);
                };
                ParticleEmitter.prototype.range = function (minValue, maxValue, value) {
                    return Math.min(maxValue, Math.max(minValue, value));
                };
                ParticleEmitter.prototype.getParam = function (value, variance, isInteger) {
                    var result = parseFloat(value) + (Math.random() * parseFloat(variance)) - parseFloat(variance) / 2;
                    if (isInteger) {
                        return Math.floor(result);
                    }
                    return result;
                };
                return ParticleEmitter;
            })();
            exports_1("ParticleEmitter", ParticleEmitter);
        }
    }
});
//# sourceMappingURL=particle-emitter.js.map