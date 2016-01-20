System.register([], function(exports_1) {
    var Ruler;
    return {
        setters:[],
        execute: function() {
            /**
             * ルーラーの制御クラスです。
             */
            Ruler = (function () {
                function Ruler(stage) {
                    this.FONT_COLOR = "#888";
                    this.stage = stage;
                    this.container = new createjs.Container();
                    this.base = new createjs.Shape();
                    this.container.addChild(this.base);
                    this.mouseBase = new createjs.Shape();
                    this.container.addChild(this.mouseBase);
                    this.verticalTextList = [];
                    this.horizontalTextList = [];
                }
                Ruler.prototype.setSize = function (ws, hs) {
                    this.width = ws;
                    this.height = hs;
                    var distance = 35;
                    var w = Math.floor(this.width / distance);
                    var h = Math.floor(this.height / distance);
                    var graphics = this.base.graphics;
                    graphics.clear();
                    graphics.beginStroke(this.FONT_COLOR);
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
                    graphics.beginFill("red");
                    graphics.drawRect(0, 0, this.width, this.height);
                };
                Ruler.prototype.update = function () {
                    var mousePt = this.container.globalToLocal(this.stage.mouseX, this.stage.mouseY);
                    var graphics = this.mouseBase.graphics;
                    graphics.clear();
                    graphics.beginStroke("#6699ff");
                    if (mousePt.x >= 0 && mousePt.x <= this.width) {
                        graphics.moveTo(mousePt.x, 0);
                        graphics.lineTo(mousePt.x, -16);
                    }
                    if (mousePt.y >= 0 && mousePt.y <= this.height) {
                        graphics.moveTo(0, mousePt.y);
                        graphics.lineTo(16, mousePt.y);
                    }
                };
                return Ruler;
            })();
            exports_1("Ruler", Ruler);
        }
    }
});
//# sourceMappingURL=particle-ruler.js.map