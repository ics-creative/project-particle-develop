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
            /**
             * Created by nyamogera on 2016/01/15.
             */
            ParticleEmitter = (function () {
                function ParticleEmitter() {
                    var _this = this;
                    this.update = function (drawingData) {
                        _this.drawingData = drawingData;
                        _this.emit();
                        _this.animate();
                        _this.lifeCheck();
                    };
                    /**
                     * パーティクルの動き。
                     */
                    this.animate = function () {
                        var rad = createjs.Matrix2D.DEG_TO_RAD * _this.drawingData.accelerationDirection;
                        var accX = Math.cos(rad) * _this.drawingData.accelerationSpeed;
                        var accY = Math.sin(rad) * _this.drawingData.accelerationSpeed;
                        for (var i = 0; i < _this.activeParticles.length; i++) {
                            var particle = _this.activeParticles[i];
                            particle.currentLife--;
                            particle.vx = particle.vx + accX;
                            particle.vy = particle.vy + accY;
                            particle.vx = particle.vx * (1 - _this.drawingData.friction);
                            particle.vy = particle.vy * (1 - _this.drawingData.friction);
                            particle.x = particle.x + particle.vx;
                            particle.y = particle.y + particle.vy;
                            particle.particleShape.x = particle.x;
                            particle.particleShape.y = particle.y;
                            var lifeParcent = Math.max(particle.currentLife, 0) / particle.totalLife;
                            var alpha = particle.finishAlpha + (particle.startAlpha - particle.finishAlpha) * lifeParcent;
                            particle.particleShape.alpha = alpha;
                            var scale = particle.finishScale + (particle.startScale - particle.finishScale) * lifeParcent;
                            particle.particleShape.scaleX = particle.particleShape.scaleY = scale;
                            //  パーティクルが死んでいたら、オブジェクトプールに移動
                            if (particle.currentLife < 0) {
                                particle.isAlive = false;
                            }
                        }
                    };
                    /**
                     * パーティクルが生きているか確認する。
                     */
                    this.lifeCheck = function () {
                        for (var i = 0; i < _this.activeParticles.length; i++) {
                            // もしも死んでいたら、アクティブリストから外してプールに保存する。
                            if (!_this.activeParticles[i].isAlive) {
                                var particle = _this.activeParticles[i];
                                _this.container.removeChild(particle.particleShape);
                                _this.activeParticles.splice(i, 1);
                                _this.particlesPool.push(particle);
                                i--;
                            }
                        }
                    };
                    /**
                     * パーティクルの生成（インターバルチェックする）
                     */
                    this.emit = function () {
                        for (var i = 0; i < _this.drawingData.emitFrequency; i++) {
                            var particle = _this.generateParticle();
                            _this.container.addChild(particle.particleShape);
                            _this.activeParticles.push(particle);
                        }
                    };
                    /**
                     * パーティクルのパラメータを設定します
                     * @returns {null}
                     */
                    this.generateParticle = function () {
                        var particle = null;
                        if (_this.particlesPool.length >= 1) {
                            particle = _this.particlesPool.shift();
                        }
                        else {
                            particle = new particle_1.Particle();
                        }
                        _this.setParticleParamater(particle);
                        return particle;
                    };
                    this.generateShape = function (particle, shapeIdList) {
                        particle.particleShape.removeAllChildren();
                        var color = _this.drawingData.startColor;
                        var r = Math.floor(Math.random() * _this.drawingData.shapeIdList.length);
                        var shapeId = (_this.drawingData.shapeIdList.length == 0) ? '' : _this.drawingData.shapeIdList[r];
                        var shape = _this.shapeGenerator.generateShape("star");
                        particle.particleShape.addChild(shape);
                    };
                    this.range = function (minValue, maxValue, value) {
                        return Math.min(maxValue, Math.max(minValue, value));
                    };
                    this.getParam = function (value, variance, isInteger) {
                        var result = parseFloat(value) + (Math.random() * parseFloat(variance)) - parseFloat(variance) / 2;
                        if (isInteger) {
                            return Math.floor(result);
                        }
                        return result;
                    };
                    this.particlesPool = new Array();
                    this.activeParticles = new Array();
                    this.container = new createjs.Container();
                    this.shapeGenerator = new shape_generator_1.ShapeGenerator();
                }
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
                return ParticleEmitter;
            })();
            exports_1("ParticleEmitter", ParticleEmitter);
        }
    }
});
//# sourceMappingURL=particle-emitter.js.map