var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EventDispatcher = createjs.EventDispatcher;
var Stamp = (function (_super) {
    __extends(Stamp, _super);
    function Stamp() {
        _super.call(this);
        this.newMatrix = new createjs.Matrix2D();
        this.setting = new ShapeSetting();
        this.size = new createjs.Point();
        this.rotation = 0;
    }
    Stamp.prototype.updateTransformation = function (shapeSupport) {
        this.size.x = shapeSupport.size.x;
        this.size.y = shapeSupport.size.y;
        this.rotation = shapeSupport.rotation;
        this.newMatrix.identity();
        this.newMatrix.rotate(shapeSupport.rotation * createjs.Matrix2D.DEG_TO_RAD);
        this.newMatrix.scale(shapeSupport.size.x / 100, shapeSupport.size.y / 100);
        this.x = shapeSupport.container.x;
        this.y = shapeSupport.container.y;
        this.setMatrix(this.newMatrix);
        this.updateGraphics();
    };
    Stamp.prototype.updateGraphics = function () {
    };
    Stamp.prototype.setMatrix = function (matrix) {
    };
    return Stamp;
})(createjs.Container);
var StampLayer = (function (_super) {
    __extends(StampLayer, _super);
    function StampLayer(stage, stamp) {
        var _this = this;
        _super.call(this);
        this.pressDown = function () {
            _this.dispatchEvent("show_support");
        };
        this.start = function () {
            var mousePt = _this.stamp.parent.globalToLocal(_this.stage.mouseX, _this.stage.mouseY);
            _this.stamp.x = mousePt.x;
            _this.stamp.y = mousePt.y;
            _this.isStart = true;
            _this.stage.addEventListener("pressup", _this.handlePressUp);
        };
        this.handlePressUp = function () {
            _this.isStart = false;
            _this.stage.removeEventListener("pressup", _this.handlePressUp);
        };
        this.update = function () {
        };
        createjs.EventDispatcher.initialize(StampLayer.prototype);
        this.stage = stage;
        this.stamp = stamp;
        this.stamp.addEventListener("mousedown", this.pressDown);
        this.toolId = tool.TOOL_STAMP;
    }
    StampLayer.prototype.updateTransformation = function (shapeSupport) {
        this.stamp.updateTransformation(shapeSupport);
    };
    StampLayer.prototype.isExit = function () {
        return !this.isStart;
    };
    StampLayer.prototype.updateSetting = function (setting) {
        this.stamp.setting.lineWidth = setting.lineWidth;
        this.stamp.setting.baseColor = setting.baseColor;
        this.stamp.setting.lineColor = setting.lineColor;
    };
    return StampLayer;
})(createjs.EventDispatcher);
var DrawingLayer = (function () {
    function DrawingLayer(stage, container, width, height, setting) {
        var _this = this;
        this.start = function () {
            _this.isStart = true;
            _this.stage.addEventListener("stagemouseup", _this.handlePressUp);
            _this.isStart = true;
            _this.generateNewLine();
        };
        this.handlePressUp = function () {
            _this.stage.removeEventListener("stagemouseup", _this.handlePressUp);
            _this.isStart = false;
        };
        this.updateSetting = function (setting) {
            _this.setting.lineColor = setting.lineColor;
        };
        this.generateNewLine = function () {
            _this.lastPoint = _this.container.globalToLocal(_this.stage.mouseX, _this.stage.mouseY);
            _this.currentPoint = new createjs.Point();
            _this.currentPoint = _this.container.globalToLocal(_this.stage.mouseX, _this.stage.mouseY);
            _this.lastMidPoint = _this.container.globalToLocal(_this.stage.mouseX, _this.stage.mouseY);
            _this.shape = new createjs.Shape();
            _this.container.addChild(_this.shape);
        };
        this.update = function () {
            if (!_this.isStart)
                return;
            console.log("update");
            var mousePt = _this.container.globalToLocal(_this.stage.mouseX, _this.stage.mouseY);
            var moveX = (mousePt.x - _this.currentPoint.x);
            var moveY = (mousePt.y - _this.currentPoint.y);
            if (moveX * moveX + moveY * moveY > 0.1) {
                _this.currentPoint.x += moveX;
                _this.currentPoint.y += moveY;
                var midPoint = new createjs.Point((_this.lastPoint.x + _this.currentPoint.x) / 2, (_this.lastPoint.y + _this.currentPoint.y) / 2);
                _this.drawCurve(_this.shape.graphics, _this.lastMidPoint, midPoint, _this.lastPoint);
                _this.lastPoint.setValues(_this.currentPoint.x, _this.currentPoint.y);
                _this.lastMidPoint.setValues(midPoint.x, midPoint.y);
            }
        };
        this.setting = new DrawingSetting();
        this.setting.lineColor = setting.lineColor;
        this.setting.lineWidth = setting.lineWidth;
        this.stage = stage;
        this.container = container;
        this.lastMidPoint = new createjs.Point();
        this.currentLineThickness = this.setting.lineWidth;
        this.width = width;
        this.height = height;
    }
    DrawingLayer.prototype.isExit = function () {
        return !this.isStart;
    };
    DrawingLayer.prototype.drawCurve = function (graphics, oldPoint, newPoint, controlPoint) {
        graphics.beginStroke(this.setting.lineColor)
            .setStrokeStyle(this.currentLineThickness, "round", "round")
            .moveTo(oldPoint.x, oldPoint.y)
            .quadraticCurveTo(controlPoint.x, controlPoint.y, newPoint.x, newPoint.y);
    };
    return DrawingLayer;
})();
var tool;
(function (tool) {
    tool.TOOL_SELECT = "tool-select";
    tool.TOOL_PEN = "tool-pen";
    tool.TOOL_STAMP = "tool-stamp";
    tool.TOOL_TEXT = "tool-text";
    tool.TOOL_IMAGE = "tool-image";
})(tool || (tool = {}));
var Toolbar = (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar() {
        var _this = this;
        _super.call(this);
        this.changeTab = function (tabName, dispatch) {
            if (dispatch === void 0) { dispatch = true; }
            _this.selectTool(tabName);
            _this.toolId = tabName;
            if (dispatch) {
                _this.dispatchEvent("change_tab");
            }
        };
        this.selectTool = function (toolId) {
            _this.colorPickerLineElement.style.display = 'none';
            _this.colorPickerBaseElement.style.display = 'none';
            _this.textInputWrapElement.style.display = 'none';
            _this.textSizeWrapElement.style.display = 'none';
            _this.lineWidthWrapElement.style.display = 'none';
            switch (toolId) {
                case tool.TOOL_SELECT:
                    break;
                case tool.TOOL_PEN:
                    _this.colorPickerLineElement.style.display = 'block';
                    _this.lineWidthWrapElement.style.display = 'block';
                    break;
                case tool.TOOL_STAMP:
                    _this.colorPickerLineElement.style.display = 'block';
                    _this.colorPickerBaseElement.style.display = 'block';
                    _this.lineWidthWrapElement.style.display = 'block';
                    break;
                case tool.TOOL_TEXT:
                    _this.colorPickerLineElement.style.display = 'block';
                    _this.textInputWrapElement.style.display = 'block';
                    _this.textSizeWrapElement.style.display = 'block';
                    break;
            }
        };
        this.shapeSetting = new ShapeSetting();
        this.drawingSetting = new DrawingSetting();
        this.textSetting = new TextSetting();
        createjs.EventDispatcher.initialize(Toolbar.prototype);
        this.toolSelectElement = document.getElementById(tool.TOOL_SELECT);
        this.toolPenElement = document.getElementById(tool.TOOL_PEN);
        this.toolStampElement = document.getElementById(tool.TOOL_STAMP);
        this.toolTextElement = document.getElementById(tool.TOOL_TEXT);
        this.toolSelectElement.addEventListener("click", function (e) {
            _this.changeTab(tool.TOOL_SELECT);
        });
        this.toolPenElement.addEventListener("click", function (e) {
            _this.changeTab(tool.TOOL_PEN);
        });
        this.toolStampElement.addEventListener("click", function (e) {
            _this.changeTab(tool.TOOL_STAMP);
        });
        this.toolTextElement.addEventListener("click", function (e) {
            _this.changeTab(tool.TOOL_TEXT);
        });
        this.colorPickerLineElement = document.getElementById("colorpicker-line-wrap");
        this.colorPickerBaseElement = document.getElementById("colorpicker-base-wrap");
        this.textInputWrapElement = document.getElementById("textinput-wrap");
        this.textSizeWrapElement = document.getElementById("textsize-wrap");
        this.lineWidthWrapElement = document.getElementById("linewidth-wrap");
        this.drawingSetting.lineColor = "#000";
        this.shapeSetting.lineColor = "#000";
        this.textSetting.lineColor = "#000";
        this.shapeSetting.baseColor = "#000";
        this.textSetting.text = "hello";
        this.colorPickerLine = $("#colorpicker-line");
        this.colorPickerLine.spectrum({
            showPalette: true,
            color: "#000",
            change: function (color) {
                _this.drawingSetting.lineColor = color.toHexString();
                _this.shapeSetting.lineColor = color.toHexString();
                _this.textSetting.lineColor = color.toHexString();
                _this.dispatchEvent("change_tool");
            }
        });
        this.colorPickerBase = $("#colorpicker-base");
        this.colorPickerBase.spectrum({
            showPalette: true,
            color: "#000",
            change: function (color) {
                _this.shapeSetting.baseColor = color.toHexString();
                _this.dispatchEvent("change_tool");
            }
        });
        this.textInputElement = document.getElementById("textinput");
        this.textInputElement.addEventListener("keyup", function (e) {
            _this.textSetting.text = _this.textInputElement.value;
            console.log(_this.textSetting.text);
            _this.dispatchEvent("change_tool");
        });
        this.lineWidthElement = document.getElementById("linewidth");
        this.lineWidthElement.addEventListener("change", function (e) {
            _this.shapeSetting.lineWidth = parseInt(_this.lineWidthElement.value);
            _this.drawingSetting.lineWidth = parseInt(_this.lineWidthElement.value);
            _this.dispatchEvent("change_tool");
        });
        this.textSizeElement = document.getElementById("textsize");
        this.textSizeElement.addEventListener("change", function (e) {
            _this.textSetting.textSize = parseInt(_this.textSizeElement.value);
            _this.dispatchEvent("change_tool");
        });
        this.changeTab(tool.TOOL_PEN, false);
    }
    return Toolbar;
})(createjs.EventDispatcher);
var App = (function () {
    function App() {
        var _this = this;
        this.handleMouseDown = function () {
            if (!(_this.layer.length == 0 || _this.layer[_this.layer.length - 1].isExit())) {
                return;
            }
            console.log("handleMouseDown" + _this.toolbar.toolId);
            switch (_this.toolbar.toolId) {
                case tool.TOOL_SELECT:
                    break;
                case tool.TOOL_PEN:
                    console.log("start-pen-tool");
                    var container = new createjs.Container();
                    _this.drawLayerContainer.addChild(container);
                    _this.drawingLayer = new DrawingLayer(_this.stage, container, _this.canvas.width, _this.canvas.height, _this.toolbar.drawingSetting);
                    _this.drawingLayer.updateSetting(_this.toolbar.drawingSetting);
                    _this.layer.push(_this.drawingLayer);
                    _this.drawingLayer.start();
                    break;
                case tool.TOOL_STAMP:
                    console.log("start-star-tool");
                    var stamp = new Star();
                    _this.stampLayer = new StampLayer(_this.stage, stamp);
                    _this.stampLayer.updateSetting(_this.toolbar.shapeSetting);
                    _this.stampLayer.addEventListener("show_support", _this.stampLayer_showSupportHandler);
                    _this.drawLayerContainer.addChild(_this.stampLayer.stamp);
                    _this.layer.push(_this.stampLayer);
                    _this.stampLayer.start();
                    _this.startSupport(_this.stampLayer);
                    break;
                case tool.TOOL_TEXT:
                    console.log("start-text-tool");
                    _this.textStampLayer = new TextStampLayer(_this.stage);
                    _this.textStampLayer.updateSetting(_this.toolbar.textSetting);
                    _this.drawLayerContainer.addChild(_this.textStampLayer.stamp);
                    _this.textStampLayer.addEventListener("show_support", _this.stampLayer_showSupportHandler);
                    _this.layer.push(_this.textStampLayer);
                    _this.textStampLayer.start();
                    break;
            }
        };
        this.startSupport = function (stampLayer) {
            _this.supportTarget = stampLayer;
            _this.shapeSupport.container.visible = true;
            _this.shapeSupport.container.x = _this.supportTarget.stamp.x;
            _this.shapeSupport.container.y = _this.supportTarget.stamp.y;
            _this.shapeSupport.rotation = 0;
            _this.shapeSupport.size.x = 5;
            _this.shapeSupport.size.y = 5;
            _this.supportTarget.updateTransformation(_this.shapeSupport);
            _this.shapeSupport.update();
            _this.shapeSupport.updateGraphics(true);
            _this.shapeSupport.startSupport();
            _this.shapeSupport.updateLineColor(_this.supportTarget.stamp.setting.lineColor);
        };
        this.stampLayer_showSupportHandler = function (e) {
            _this.shapeSupport.container.visible = true;
            _this.supportTarget = e.currentTarget;
            _this.shapeSupport.rotation = _this.supportTarget.stamp.rotation;
            _this.shapeSupport.container.x = _this.supportTarget.stamp.x;
            _this.shapeSupport.container.y = _this.supportTarget.stamp.y;
            _this.shapeSupport.size.x = _this.supportTarget.stamp.size.x;
            _this.shapeSupport.size.y = _this.supportTarget.stamp.size.y;
            _this.shapeSupport.updateLineColor(_this.supportTarget.stamp.setting.lineColor);
            _this.supportTarget.updateTransformation(_this.shapeSupport);
            _this.supportTarget.stamp.updateGraphics();
            _this.shapeSupport.update();
            _this.shapeSupport.updateGraphics(true);
            var targetText = _this.supportTarget;
            if (_this.supportTarget.toolId == tool.TOOL_TEXT) {
                _this.toolbar.textInputElement.value = targetText.textStamp.text.text;
            }
            _this.toolbar.selectTool(_this.supportTarget.toolId);
        };
        this.changeTab = function () {
            console.log("tabChanged");
            if (_this.toolbar.toolId == tool.TOOL_SELECT) {
                _this.stage.mouseChildren = true;
            }
            else {
                _this.stage.mouseChildren = false;
            }
        };
        this.changeTool = function () {
            if (!_this.supportTarget) {
                return;
            }
            switch (_this.supportTarget.toolId) {
                case tool.TOOL_SELECT:
                    break;
                case tool.TOOL_PEN:
                    _this.drawingLayer.updateSetting(_this.toolbar.drawingSetting);
                    break;
                case tool.TOOL_STAMP:
                    _this.shapeSupport.updateLineColor(_this.toolbar.shapeSetting.lineColor);
                    _this.shapeSupport.updateGraphics(true);
                    _this.supportTarget.updateSetting(_this.toolbar.shapeSetting);
                    break;
                case tool.TOOL_TEXT:
                    _this.shapeSupport.updateLineColor(_this.toolbar.textSetting.lineColor);
                    _this.shapeSupport.updateGraphics(true);
                    _this.supportTarget.updateSetting(_this.toolbar.textSetting);
                    _this.shapeSupport.rotation = _this.supportTarget.stamp.rotation;
                    _this.shapeSupport.container.x = _this.supportTarget.stamp.x;
                    _this.shapeSupport.container.y = _this.supportTarget.stamp.y;
                    _this.shapeSupport.size.x = _this.supportTarget.stamp.size.x;
                    _this.shapeSupport.size.y = _this.supportTarget.stamp.size.y;
                    _this.shapeSupport.update();
                    _this.shapeSupport.updateGraphics(true);
                    break;
            }
        };
        this.update = function () {
            if (_this.layer.length >= 1 && !_this.layer[_this.layer.length - 1].isExit()) {
                _this.layer[_this.layer.length - 1].update();
            }
            _this.stage.update();
            if (_this.supportTarget) {
                _this.supportTarget.updateTransformation(_this.shapeSupport);
            }
            _this.shapeSupport.update();
            _this.shapeSupport.updateGraphics();
        };
        this.layer = [];
        this.toolbar = new Toolbar();
        var stageWidth = (window.innerWidth);
        var stageHeight = (window.innerHeight);
        this.canvas = document.getElementById("canvas_drawing");
        this.canvas.width = stageWidth;
        this.canvas.height = stageHeight;
        this.stage = new createjs.Stage(this.canvas);
        this.background = new createjs.Shape();
        this.background.graphics.beginFill("gray");
        this.background.graphics.drawRect(0, 0, stageWidth, stageHeight);
        this.stage.addChild(this.background);
        this.drawingContainer = new createjs.Container;
        this.stage.addChild(this.drawingContainer);
        this.canvasBackground = new createjs.Shape();
        this.canvasBackground.graphics.beginFill("white");
        this.canvasBackground.graphics.drawRect(0, 0, 1024, 512);
        this.drawingContainer.addChild(this.canvasBackground);
        this.drawLayerContainer = new createjs.Container();
        this.drawingContainer.addChild(this.drawLayerContainer);
        this.shapeSupport = new ShapeSupport(this.stage);
        this.drawingContainer.addChild(this.shapeSupport.container);
        this.shapeSupport.container.visible = false;
        this.drawingContainer.x = (stageWidth - 1024) / 2;
        this.drawingContainer.y = (stageHeight - 512) / 2;
        createjs.Ticker.addEventListener("tick", this.update);
        this.toolbar.addEventListener('change_tab', this.changeTab);
        this.toolbar.addEventListener('change_tool', this.changeTool);
        this.stage.addEventListener("pressmove", this.handleMouseDown);
    }
    App.prototype.addImage = function (image) {
        var bitmap = new createjs.Bitmap(image);
        var stamp = new BitmapStamp(bitmap);
        this.stampLayer = new StampLayer(this.stage, stamp);
        this.stampLayer.updateSetting(this.toolbar.shapeSetting);
        this.stampLayer.addEventListener("show_support", this.stampLayer_showSupportHandler);
        this.drawLayerContainer.addChild(this.stampLayer.stamp);
        stamp.x = 300;
        stamp.y = 300;
        this.layer.push(this.stampLayer);
    };
    return App;
})();
var DrawingSetting = (function () {
    function DrawingSetting() {
        this.lineColor = "#000";
        this.lineWidth = 3;
    }
    return DrawingSetting;
})();
var ShapeSetting = (function (_super) {
    __extends(ShapeSetting, _super);
    function ShapeSetting() {
        _super.call(this);
        this.baseColor = "#000";
    }
    return ShapeSetting;
})(DrawingSetting);
var TextSetting = (function (_super) {
    __extends(TextSetting, _super);
    function TextSetting() {
        _super.call(this);
        this.textSize = 20;
        this.text = "文字列";
    }
    return TextSetting;
})(ShapeSetting);
var Star = (function (_super) {
    __extends(Star, _super);
    function Star() {
        var _this = this;
        _super.call(this);
        this.vertex = [];
        this.vertexOriginal = [];
        this.setVertex = function () {
            var x = _this.centerX + _this.radius * Math.cos(_this.angle);
            var y = _this.centerY + _this.radius * Math.sin(_this.angle);
            for (var i = 0; i < _this.sides + 1; i++) {
                if (_this.pointSize != 0) {
                    var radiusHarf = _this.radius * (1 - _this.pointSize);
                    var rotate_1 = -(Math.PI / _this.sides) + (Math.PI * 2 / _this.sides * i + _this.angle);
                    var x_1 = _this.centerX + radiusHarf * Math.cos(rotate_1);
                    var y_1 = _this.centerY + radiusHarf * Math.sin(rotate_1);
                    _this.vertex.push(new createjs.Point(x_1, y_1));
                    _this.vertexOriginal.push(new createjs.Point(x_1, y_1));
                }
                var rotate = Math.PI * 2 / _this.sides * i + _this.angle;
                var x_2 = _this.centerX + _this.radius * Math.cos(rotate);
                var y_2 = _this.centerY + _this.radius * Math.sin(rotate);
                _this.vertex.push(new createjs.Point(x_2, y_2));
                _this.vertexOriginal.push(new createjs.Point(x_2, y_2));
            }
        };
        this.radius = 50;
        this.sides = 6;
        this.angle = 0;
        this.pointSize = 0.3;
        this.centerX = 0;
        this.centerY = 0;
        var Graphics = createjs.Graphics;
        this.graphics = new Graphics();
        this.shape = new createjs.Shape(this.graphics);
        this.addChild(this.shape);
        this.setVertex();
        this.setMatrix(this.newMatrix);
        this.updateGraphics();
    }
    Star.prototype.setMatrix = function (matrix) {
        var vertexLentgh = this.vertex.length;
        for (var i = 0; i < vertexLentgh; i++) {
            this.vertex[i] = matrix.transformPoint(this.vertexOriginal[i].x, this.vertexOriginal[i].y);
        }
    };
    Star.prototype.updateGraphics = function () {
        var Graphics = createjs.Graphics;
        this.graphics.clear();
        this.graphics.setStrokeStyle(this.setting.lineWidth);
        this.graphics.beginStroke(this.setting.lineColor);
        this.graphics.beginFill(this.setting.baseColor);
        this.graphics.moveTo(this.vertex[0].x, this.vertex[0].y);
        var vertexLentgh = this.vertex.length;
        for (var i = 1; i < vertexLentgh; i++) {
            this.graphics.lineTo(this.vertex[i].x, this.vertex[i].y);
        }
        this.graphics.endFill();
        this.graphics.endStroke();
    };
    return Star;
})(Stamp);
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        _super.call(this);
        this.setVertex = function () {
        };
        this.centerX = 0;
        this.centerY = 0;
        this.shape = new createjs.Shape(this.graphics);
        this.graphics = this.shape.graphics;
        this.addChild(this.shape);
        this.updateGraphics();
    }
    Circle.prototype.setMatrix = function (matrix) {
    };
    Circle.prototype.updateGraphics = function () {
        this.graphics.clear();
        this.graphics.setStrokeStyle(4.0);
        this.graphics.beginStroke(this.setting.lineColor);
        this.graphics.beginFill(this.setting.baseColor);
        this.graphics.drawEllipse(-this.size.x / 2, -this.size.y / 2, this.size.x, this.size.y);
        this.graphics.endFill();
        this.graphics.endStroke();
    };
    return Circle;
})(Stamp);
var BitmapStamp = (function (_super) {
    __extends(BitmapStamp, _super);
    function BitmapStamp(bitmap) {
        _super.call(this);
        this.bitmap = bitmap;
        this.shape = new createjs.Shape();
        var color = createjs.Graphics.getRGB(1, 1, 1, 0.9);
        this.shape.graphics.beginFill(color).drawRect(0, 0, this.bitmap.image.width, this.bitmap.image.height);
        this.size.x = this.bitmap.image.width;
        this.size.y = this.bitmap.image.height;
        this.addChild(this.shape);
        this.addChild(this.bitmap);
        this.bitmap.mouseEnabled = false;
        this.setMatrix(this.newMatrix);
        this.updateGraphics();
    }
    BitmapStamp.prototype.setMatrix = function (matrix) {
        matrix.decompose(this.shape);
        matrix.decompose(this.bitmap);
    };
    BitmapStamp.prototype.updateTransformation = function (shapeSupport) {
        var scale = new createjs.Point(shapeSupport.size.x / this.bitmap.image.width, shapeSupport.size.y / this.bitmap.image.height);
        this.size.x = shapeSupport.size.x;
        this.size.y = shapeSupport.size.y;
        this.rotation = shapeSupport.rotation;
        this.newMatrix.identity();
        this.newMatrix.translate(-this.bitmap.image.width / 2, -this.bitmap.image.height / 2);
        this.newMatrix.rotate(shapeSupport.rotation * createjs.Matrix2D.DEG_TO_RAD);
        this.newMatrix.scale(scale.x, scale.y);
        this.x = shapeSupport.container.x;
        this.y = shapeSupport.container.y;
        this.newMatrix.decompose(this.shape);
        this.newMatrix.decompose(this.bitmap);
        this.setMatrix(this.newMatrix);
        this.updateGraphics();
    };
    BitmapStamp.prototype.updateGraphics = function () {
    };
    return BitmapStamp;
})(Stamp);
var TextStamp = (function (_super) {
    __extends(TextStamp, _super);
    function TextStamp() {
        var _this = this;
        _super.call(this);
        this.resize = function () {
            _this.text.x = -_this.text.getMeasuredWidth() / 2;
            _this.text.y = -_this.text.getMeasuredHeight() / 2;
            _this.shape.x = -_this.text.getMeasuredWidth() / 2;
            _this.shape.y = -_this.text.getMeasuredHeight() / 2;
            _this.size.x = _this.text.getMeasuredWidth();
            _this.size.y = _this.text.getMeasuredHeight();
        };
        this.text = new createjs.Text("Hello World", "20px Arial", "#ff7700");
        this.shape = new createjs.Shape();
        var color = createjs.Graphics.getRGB(1, 1, 1, 0.01);
        this.shape.graphics.beginFill(color).drawRect(0, 0, this.text.getMeasuredWidth(), this.text.getMeasuredHeight());
        this.resize();
        this.addChild(this.shape);
        this.addChild(this.text);
    }
    TextStamp.prototype.updateGraphics = function () {
    };
    TextStamp.prototype.setMatrix = function (matrix) {
        matrix.decompose(this);
    };
    return TextStamp;
})(Stamp);
var TextStampLayer = (function (_super) {
    __extends(TextStampLayer, _super);
    function TextStampLayer(stage) {
        var _this = this;
        _super.call(this, stage, new TextStamp());
        this.start = function () {
            var mousePt = _this.textStamp.globalToLocal(_this.stage.mouseX, _this.stage.mouseY);
            _this.textStamp.x = mousePt.x;
            _this.textStamp.y = mousePt.y;
            _this.isStart = true;
            _this.stage.addEventListener("pressup", _this.handlePressUp);
            _this.textStamp.text.addEventListener("mousedown", _this.pressDown);
        };
        this.textStamp = this.stamp;
        this.toolId = tool.TOOL_TEXT;
    }
    TextStampLayer.prototype.updateTransformation = function (shapeSupport) {
        this.textStamp.x = shapeSupport.container.x;
        this.textStamp.y = shapeSupport.container.y;
        this.textStamp.rotation = shapeSupport.rotation;
        this.textStamp.text.rotation = shapeSupport.rotation * createjs.Matrix2D.DEG_TO_RAD;
    };
    TextStampLayer.prototype.updateSetting = function (setting) {
        var textSetting = setting;
        this.stamp.setting.lineColor = setting.lineColor;
        this.textStamp.text.color = setting.lineColor;
        this.textStamp.text.text = textSetting.text;
        this.textStamp.text.font = textSetting.textSize + "px Arial";
        this.textStamp.resize();
    };
    return TextStampLayer;
})(StampLayer);
var Graphics = createjs.Graphics;
var ShapeSupport = (function () {
    function ShapeSupport(stage) {
        var _this = this;
        this.updateLineColor = function (lineColor) {
            _this.lineColor = lineColor;
            var strokeCommandLength = _this.strokeCommands.length;
            for (var i = 0; i < strokeCommandLength; i++) {
                _this.strokeCommands[i].style = _this.lineColor;
            }
        };
        this.startSupport = function () {
            _this.startDrag(_this.controllerRightBottom);
        };
        this.startDrag = function (dragTarget) {
            if (_this.dragTarget) {
                _this.stage.removeEventListener("pressup", _this.handlePressUp);
            }
            _this.dragTarget = dragTarget;
            _this.stage.addEventListener("pressup", _this.handlePressUp);
            var mousePt = _this.container.parent.globalToLocal(_this.stage.mouseX, _this.stage.mouseY);
            _this.dragPoint.x = mousePt.x - (_this.dragTarget.x + _this.container.x);
            _this.dragPoint.y = mousePt.y - (_this.dragTarget.y + _this.container.y);
        };
        this.handleMouseDown = function (e) {
            console.log("handleMouseDown:" + e.currentTarget);
            _this.startDrag(e.currentTarget);
        };
        this.update = function () {
            _this.matrix.identity();
            _this.matrix.rotate(_this.rotation);
            if (!_this.dragTarget) {
                return;
            }
            var mousePt = _this.container.parent.globalToLocal(_this.stage.mouseX, _this.stage.mouseY);
            var diffX = (mousePt.x - _this.container.x - _this.dragPoint.x);
            var diffY = (mousePt.y - _this.container.y - _this.dragPoint.y);
            var diff = _this.matrix.clone().invert().transformPoint(diffX, diffY);
            switch (_this.dragTarget) {
                case _this.baseShape:
                    console.log("baseShape - dragging");
                    _this.container.x = mousePt.x - _this.dragPoint.x;
                    _this.container.y = mousePt.y - _this.dragPoint.y;
                    break;
                case _this.controllerLeftTop:
                    console.log("leftTop - dragging");
                    _this.size.x = -diff.x * 2;
                    _this.size.y = -diff.y * 2;
                    break;
                case _this.controllerRightTop:
                    console.log("rightTop - dragging");
                    _this.size.x = diff.x * 2;
                    _this.size.y = -diff.y * 2;
                    break;
                case _this.controllerRightBottom:
                    console.log("rightBottom - dragging");
                    _this.size.x = diff.x * 2;
                    _this.size.y = diff.y * 2;
                    break;
                case _this.controllerLeftBottom:
                    console.log("leftBottom - dragging");
                    _this.size.x = -diff.x * 2;
                    _this.size.y = diff.y * 2;
                    break;
                case _this.controllerRotation:
                    console.log("rotation - dragging");
                    _this.rotation = (Math.atan2(diffY, diffX) * 180 / Math.PI + 90) + (_this.size.y >= 0 ? 0 : 180);
                    console.log(_this.rotation);
                    break;
            }
        };
        this.handlePressUp = function (e) {
            if (_this.stage) {
                _this.stage.removeEventListener("pressup", _this.handlePressUp);
            }
            _this.dragTarget = null;
        };
        this.updateGraphics = function (drawForce) {
            if (drawForce === void 0) { drawForce = false; }
            if (!drawForce && !_this.dragTarget) {
                return;
            }
            var graphics = _this.baseShape.graphics;
            var harf_w = _this.size.x / 2;
            var harf_h = _this.size.y / 2;
            var leftTop = _this.matrix.transformPoint(-harf_w, -harf_h);
            var rightTop = _this.matrix.transformPoint(harf_w, -harf_h);
            var leftBottom = _this.matrix.transformPoint(-harf_w, harf_h);
            var rightBottom = _this.matrix.transformPoint(harf_w, harf_h);
            var rotationPointStart = _this.matrix.transformPoint(0, -harf_h);
            var rotationPoint = _this.matrix.transformPoint(0, -harf_h - (_this.size.y >= 0 ? 50 : -50));
            var color = createjs.Graphics.getRGB(1, 1, 1, 0.01);
            graphics.clear().beginFill(color).beginStroke(_this.lineColor).moveTo(leftTop.x, leftTop.y).lineTo(leftTop.x, leftTop.y).lineTo(rightTop.x, rightTop.y).lineTo(rightBottom.x, rightBottom.y).lineTo(leftBottom.x, leftBottom.y).lineTo(leftTop.x, leftTop.y);
            graphics.moveTo(rotationPointStart.x, rotationPointStart.y).lineTo(rotationPoint.x, rotationPoint.y);
            _this.controllerLeftTop.setTransform(leftTop.x, leftTop.y, 1, 1, _this.rotation);
            _this.controllerRightTop.setTransform(rightTop.x, rightTop.y, 1, 1, _this.rotation);
            _this.controllerRightBottom.setTransform(rightBottom.x, rightBottom.y, 1, 1, _this.rotation);
            _this.controllerLeftBottom.setTransform(leftBottom.x, leftBottom.y, 1, 1, _this.rotation);
            _this.controllerRotation.setTransform(rotationPoint.x, rotationPoint.y, 1, 1, _this.rotation);
        };
        this.stage = stage;
        this.lineColor = "blue";
        this.rotation = 0;
        this.size = new createjs.Point();
        this.baseShape = new createjs.Shape();
        this.matrix = new createjs.Matrix2D();
        this.dragPoint = new createjs.Point();
        this.container = new createjs.Container();
        this.baseShape = new createjs.Shape();
        this.container.addChild(this.baseShape);
        this.baseShape.addEventListener("mousedown", this.handleMouseDown);
        this.controllerRotation = new createjs.Shape();
        this.container.addChild(this.controllerRotation);
        this.controllerRotation.addEventListener("mousedown", this.handleMouseDown);
        this.controllerLeftTop = new createjs.Shape();
        this.controllerRightTop = new createjs.Shape();
        this.controllerLeftBottom = new createjs.Shape();
        this.controllerRightBottom = new createjs.Shape();
        var controlSize = 10;
        var controllerList = [
            this.controllerLeftTop,
            this.controllerRightTop,
            this.controllerRightBottom,
            this.controllerLeftBottom];
        this.strokeCommands = [];
        var controllerListLength = controllerList.length;
        for (var i = 0; i < controllerListLength; i++) {
            this.container.addChild(controllerList[i]);
            var graphics = controllerList[i].graphics;
            graphics.beginFill("white");
            var strokeCommand = graphics.beginStroke(this.lineColor).command;
            graphics.drawRect(-controlSize / 2, -controlSize / 2, controlSize, controlSize).closePath();
            this.strokeCommands.push(strokeCommand);
            controllerList[i].addEventListener("mousedown", this.handleMouseDown);
        }
        var graphics = this.controllerRotation.graphics;
        graphics.beginFill("white");
        var strokeCommand = graphics.beginStroke(this.lineColor).command;
        graphics.drawCircle(0, 0, controlSize / 2).closePath();
        this.strokeCommands.push(strokeCommand);
    }
    return ShapeSupport;
})();
var Index = (function () {
    function Index() {
        this.connect = function () {
            if (process.env.NODE_ENV === 'production') {
                require('electron-connect').client.create();
            }
        };
    }
    return Index;
})();
var index = new Index();
window.jQuery = window.$ = require('./libs/jquery-2.1.1.min.js');
window.onload = function () {
    index.connect();
    console.log("connect-test");
    var app = new App();
};
