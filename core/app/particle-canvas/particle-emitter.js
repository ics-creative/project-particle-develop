System.register(["./particle"], function(exports_1) {
    "use strict";
    var particle_1;
    var ParticleEmitter;
    return {
        setters:[
            function (particle_1_1) {
                particle_1 = particle_1_1;
            }],
        execute: function() {
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
                        for (var i = 0; i < _this.activeParticles.length; i++) {
                            var particle = _this.activeParticles[i];
                            particle.currentLife--;
                            particle.x = particle.x + particle.vx;
                            particle.y = particle.y + particle.vy;
                            particle.particleShape.x = particle.x;
                            particle.particleShape.y = particle.y;
                            var lifeParcent = particle.currentLife / particle.totalLife;
                            var alpha = particle.startAlpha + (particle.startAlpha - particle.finishAlpha) * lifeParcent;
                            particle.particleShape.alpha = alpha;
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
                        var particle = _this.generateParticle();
                        _this.container.addChild(particle.particleShape);
                        _this.activeParticles.push(particle);
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
                }
                /**
                 * パーティくるパラメータの設定
                 * @param particle
                 */
                ParticleEmitter.prototype.setParticleParamater = function (particle) {
                    particle.particleShape.removeAllChildren();
                    particle.isAlive = true;
                    particle.x = this.getParam(this.drawingData.startX, this.drawingData.startXVariance, false);
                    particle.y = this.getParam(this.drawingData.startY, this.drawingData.startYVariance, false);
                    var shape = new createjs.Shape();
                    shape.graphics.beginFill("red");
                    shape.graphics.drawCircle(0, 0, 10);
                    particle.particleShape.addChild(shape);
                    //  生存期間
                    particle.totalLife = Math.max(1, this.getParam(this.drawingData.lifeSpan, this.drawingData.lifeSpanVariance, true));
                    particle.currentLife = particle.totalLife;
                    //  スピード
                    var speed = this.getParam(this.drawingData.speed, this.drawingData.speedVariance, false);
                    var angle = createjs.Matrix2D.DEG_TO_RAD * this.getParam(this.drawingData.angle, this.drawingData.angleVariance, false);
                    particle.vx = Math.cos(angle) + speed;
                    particle.vy = Math.sin(angle) + speed;
                    //  アルファ
                    particle.startAlpha = this.range(0, 1, this.getParam(this.drawingData.startAlpha, this.drawingData.startAlphaVariance, false));
                    particle.finishAlpha = this.range(0, 1, this.getParam(this.drawingData.finishAlpha, this.drawingData.finishAlphaVariance, false));
                };
                return ParticleEmitter;
            })();
            exports_1("ParticleEmitter", ParticleEmitter);
        }
    }
});
//# sourceMappingURL=particle-emitter.js.map