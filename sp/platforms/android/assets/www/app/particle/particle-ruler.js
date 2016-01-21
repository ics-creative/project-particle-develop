System.register([], function(exports_1) {
    var Ruler;
    return {
        setters:[],
        execute: function() {
            /**
             * ルーラーの制御クラスです。
             */
            Ruler = (function () {
                function Ruler(_data) {
                    var _this = this;
                    this._data = _data;
                    this.FONT_COLOR = "#888";
                    this._isMouseDown = false;
                    this.container = new createjs.Container();
                    this.shapeBg = new createjs.Shape();
                    this.container.addChild(this.shapeBg);
                    this.shapeMouse = new createjs.Shape();
                    this.container.addChild(this.shapeMouse);
                    this._thumb = new createjs.Shape();
                    this._thumb.cursor = "crosshair";
                    this._thumb.graphics.setStrokeStyle(3)
                        .beginStroke("white").drawRect(-8, -8, 16, 16).endStroke()
                        .beginStroke("black").drawRect(-6, -6, 12, 12).endStroke()
                        .beginFill("rgba(0, 0, 0, 0.01)").drawRect(-24, -24, 48, 48);
                    this.container.addChild(this._thumb);
                    this.container.on("mousedown", function () {
                        _this._isMouseDown = true;
                    });
                    this.container.on("pressmove", this.handleThumbMouseMove, this);
                    this.container.on("pressup", function () {
                        _this._isMouseDown = false;
                    });
                    this.verticalTextList = [];
                    this.horizontalTextList = [];
                }
                Ruler.prototype.handleThumbMouseMove = function (event) {
                    var stage = this.container.stage;
                    var point = this.container.globalToLocal(stage.mouseX, stage.mouseY);
                    this._thumb.x = point.x;
                    this._thumb.y = point.y;
                    // データに反映
                    this._data.startX = point.x;
                    this._data.startY = point.y;
                };
                Ruler.prototype.setSize = function (ws, hs) {
                    this.width = ws;
                    this.height = hs;
                    var graphics = this.shapeBg.graphics;
                    graphics.clear();
                    graphics.setStrokeStyle(1);
                    graphics.beginStroke(this.FONT_COLOR);
                    // 枠線を描く
                    graphics.drawRect(-0.5, -0.5, ws + 1.0, hs + 1.0);
                    var distance = 35;
                    var w = Math.floor(this.width / distance);
                    var h = Math.floor(this.height / distance);
                    for (var i = 0; i < w; i++) {
                        var ii = (i);
                        if (this.horizontalTextList.length <= ii) {
                            this.horizontalTextList.push(new createjs.Text((i * distance) + "", "Arial 20px", this.FONT_COLOR));
                        }
                        this.horizontalTextList[ii].visible = true;
                        this.horizontalTextList[ii].x = (i * distance);
                        this.horizontalTextList[ii].y = -20;
                        this.horizontalTextList[ii].rotation = -90;
                        this.horizontalTextList[ii].textAlign = "center";
                        this.horizontalTextList[ii].textBaseline = "middle";
                        this.container.addChild(this.horizontalTextList[ii]);
                        graphics.moveTo((i * distance), -5);
                        graphics.lineTo((i * distance), 0);
                    }
                    for (var i = w; i < this.horizontalTextList.length; i++) {
                        this.horizontalTextList[i].visible = false;
                    }
                    for (var i = 0; i < h; i++) {
                        var ii = (i);
                        if (this.verticalTextList.length <= ii) {
                            this.verticalTextList.push(new createjs.Text((i * distance) + "", "Arial 20px", this.FONT_COLOR));
                        }
                        this.verticalTextList[ii].visible = true;
                        this.verticalTextList[ii].y = (i * distance);
                        this.verticalTextList[ii].x = -20;
                        this.verticalTextList[ii].textAlign = "right";
                        this.verticalTextList[ii].textBaseline = "middle";
                        this.container.addChild(this.verticalTextList[ii]);
                        graphics.moveTo(-5, (i * distance));
                        graphics.lineTo(0, (i * distance));
                    }
                    for (var i = h; i < this.verticalTextList.length; i++) {
                        this.verticalTextList[i].visible = false;
                    }
                };
                Ruler.prototype.update = function () {
                    var stage = this.container.stage;
                    var mousePt = this.container.globalToLocal(stage.mouseX, stage.mouseY);
                    var graphics = this.shapeMouse.graphics;
                    graphics.clear()
                        .setStrokeStyle(2)
                        .beginStroke("#6699ff");
                    var isInHorizontal = 0 <= mousePt.x && mousePt.x <= this.width;
                    var isInVertical = 0 <= mousePt.y && mousePt.y <= this.height;
                    if (isInHorizontal == true) {
                        graphics.moveTo(mousePt.x, 0);
                        graphics.lineTo(mousePt.x, -16);
                    }
                    if (isInVertical == true) {
                        graphics.moveTo(-16, mousePt.y);
                        graphics.lineTo(0, mousePt.y);
                    }
                    // ドラッグ中でなければ、かっこ良く目盛りを表示する
                    if (this._isMouseDown == true) {
                        var mx = Math.floor(mousePt.x) - 0.5;
                        var my = Math.floor(mousePt.y) - 0.5;
                        graphics
                            .setStrokeStyle(1)
                            .beginStroke(createjs.Graphics.getRGB(255, 255, 255, 0.5));
                        if (isInHorizontal == true) {
                            graphics.moveTo(mx, 0);
                            graphics.lineTo(mx, this._data.height);
                        }
                        if (isInVertical == true) {
                            graphics.moveTo(0, my);
                            graphics.lineTo(this._data.width, my);
                        }
                    }
                    else {
                        // ドラッグ中でなければ、データを反映
                        this._thumb.x = this._data.startX;
                        this._thumb.y = this._data.startY;
                    }
                };
                return Ruler;
            })();
            exports_1("Ruler", Ruler);
        }
    }
});
//# sourceMappingURL=particle-ruler.js.map