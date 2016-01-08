var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EventDispatcher = createjs.EventDispatcher;
var Stamp = (function () {
    function Stamp() {
        this.draw = function () {
        };
        this.setting = new ShapeSetting();
        this.size = new createjs.Point();
        this.rotation = 0;
    }
    Stamp.prototype.setMatrix = function (matrix) {
    };
    return Stamp;
})();
var StampLayer = (function (_super) {
    __extends(StampLayer, _super);
    function StampLayer(stage, stamp) {
        var _this = this;
        _super.call(this);
        this.pressDown = function () {
            _this.dispatchEvent("show_support");
        };
        this.start = function () {
            _this.stamp.shape.x = _this.stage.mouseX;
            _this.stamp.shape.y = _this.stage.mouseY;
            _this.isStart = true;
            _this.stage.addEventListener("pressup", _this.handlePressUp);
        };
        this.handlePressUp = function () {
            _this.isStart = false;
            _this.stage.removeEventListener("pressup", _this.handlePressUp);
        };
        this.update = function () {
        };
        this.handleMouseUp = function () {
        };
        createjs.EventDispatcher.initialize(StampLayer.prototype);
        this.stage = stage;
        this.stamp = stamp;
        this.stamp.shape.addEventListener("mousedown", this.pressDown);
    }
    StampLayer.prototype.updateTransformation = function (shapeSupport) {
        this.stamp.size.x = shapeSupport.size.x / 2;
        this.stamp.size.y = shapeSupport.size.y / 2;
        this.stamp.rotation = shapeSupport.rotation;
        this.stamp.newMatrix.identity();
        this.stamp.newMatrix.rotate(shapeSupport.rotation);
        this.stamp.newMatrix.scale(shapeSupport.size.x / 200, shapeSupport.size.y / 200);
        this.stamp.shape.x = shapeSupport.container.x;
        this.stamp.shape.y = shapeSupport.container.y;
        this.stamp.setMatrix(this.stamp.newMatrix);
        this.stamp.draw();
    };
    StampLayer.prototype.isExit = function () {
        return !this.isStart;
    };
    StampLayer.prototype.updateSetting = function (setting) {
        this.stamp.setting.baseColor = setting.baseColor;
        this.stamp.setting.lineColor = setting.lineColor;
    };
    return StampLayer;
})(createjs.EventDispatcher);
var DrawingLayer = (function () {
    function DrawingLayer(stage, container, width, height, color) {
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
            _this.lastPoint = new createjs.Point();
            _this.lastPoint.x = _this.stage.mouseX;
            _this.lastPoint.y = _this.stage.mouseY;
            _this.currentPoint = new createjs.Point();
            _this.currentPoint.x = _this.stage.mouseX;
            _this.currentPoint.y = _this.stage.mouseY;
            _this.lastMidPoint = new createjs.Point();
            _this.lastMidPoint.x = _this.stage.mouseX;
            _this.lastMidPoint.y = _this.stage.mouseY;
            _this.shape = new createjs.Shape();
            _this.container.addChild(_this.shape);
        };
        this.update = function () {
            if (!_this.isStart)
                return;
            console.log("update");
            var moveX = (_this.stage.mouseX - _this.currentPoint.x);
            var moveY = (_this.stage.mouseY - _this.currentPoint.y);
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
        this.setting.lineColor = color;
        this.stage = stage;
        this.container = container;
        this.lastMidPoint = new createjs.Point();
        this.currentLineThickness = 1;
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
})(tool || (tool = {}));
var Toolbar = (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar() {
        var _this = this;
        _super.call(this);
        this.changeTab = function (tabName, dispatch) {
            if (dispatch === void 0) { dispatch = true; }
            _this.colorPickerLineElement.style.display = 'none';
            _this.colorPickerBaseElement.style.display = 'none';
            _this.textInputWrapElement.style.display = 'none';
            switch (tabName) {
                case tool.TOOL_SELECT:
                    _this.colorPickerLineElement.style.display = 'block';
                    break;
                case tool.TOOL_PEN:
                    _this.colorPickerLineElement.style.display = 'block';
                    break;
                case tool.TOOL_STAMP:
                    _this.colorPickerLineElement.style.display = 'block';
                    _this.colorPickerBaseElement.style.display = 'block';
                    break;
                case tool.TOOL_TEXT:
                    _this.colorPickerLineElement.style.display = 'block';
                    _this.colorPickerBaseElement.style.display = 'block';
                    _this.textInputWrapElement.style.display = 'block';
                    break;
            }
            _this.toolId = tabName;
            if (dispatch) {
                _this.dispatchEvent("change_tab");
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
        this.colorPickerLine = $("#colorpicker-line");
        this.colorPickerLine.spectrum({
            showPalette: true,
            color: "#000",
            change: function (color) {
                _this.drawingSetting.lineColor = color.toHexString();
                _this.shapeSetting.lineColor = color.toHexString();
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
        this.textInputElement.addEventListener("change", function (e) {
            _this.textSetting.text = _this.textInputElement.value;
            console.log(_this.textSetting.text);
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
            switch (_this.toolbar.toolId) {
                case tool.TOOL_SELECT:
                    break;
                case tool.TOOL_PEN:
                    var container = new createjs.Container();
                    _this.drawLayerContainer.addChild(container);
                    _this.drawingLayer = new DrawingLayer(_this.stage, container, _this.canvas.width, _this.canvas.height, "#000");
                    _this.drawingLayer.updateSetting(_this.toolbar.drawingSetting);
                    _this.layer.push(_this.drawingLayer);
                    _this.drawingLayer.start();
                    break;
                case tool.TOOL_STAMP:
                    var stamp = new Star();
                    _this.stampLayer = new StampLayer(_this.stage, stamp);
                    _this.stampLayer.updateSetting(_this.toolbar.shapeSetting);
                    _this.stampLayer.addEventListener("show_support", _this.stampLayer_showSupportHandler);
                    _this.drawLayerContainer.addChild(_this.stampLayer.stamp.shape);
                    _this.layer.push(_this.stampLayer);
                    _this.stampLayer.start();
                    _this.startSupport(_this.stampLayer);
                    break;
                case tool.TOOL_TEXT:
                    var stamp = new Star();
                    _this.stampLayer = new StampLayer(_this.stage, stamp);
                    _this.stampLayer.updateSetting(_this.toolbar.shapeSetting);
                    _this.drawLayerContainer.addChild(_this.stampLayer.stamp.shape);
                    _this.layer.push(_this.stampLayer);
                    _this.stampLayer.start();
                    break;
            }
        };
        this.startSupport = function (stampLayer) {
            _this.supportTarget = stampLayer;
            _this.shapeSupport.container.x = _this.supportTarget.stamp.shape.x;
            _this.shapeSupport.container.y = _this.supportTarget.stamp.shape.y;
            _this.shapeSupport.rotation = 0;
            _this.shapeSupport.size.x = 5;
            _this.shapeSupport.size.y = 5;
            _this.supportTarget.updateTransformation(_this.shapeSupport);
            _this.supportTarget.stamp.draw();
            _this.shapeSupport.update();
            _this.shapeSupport.draw();
            _this.shapeSupport.startSupport();
        };
        this.stampLayer_showSupportHandler = function (e) {
            _this.supportTarget = e.currentTarget;
            _this.shapeSupport.rotation = _this.supportTarget.stamp.rotation;
            _this.shapeSupport.container.x = _this.supportTarget.stamp.shape.x;
            _this.shapeSupport.container.y = _this.supportTarget.stamp.shape.y;
            _this.shapeSupport.size.x = _this.supportTarget.stamp.size.x * 2;
            _this.shapeSupport.size.y = _this.supportTarget.stamp.size.y * 2;
            _this.supportTarget.updateTransformation(_this.shapeSupport);
            _this.supportTarget.stamp.draw();
            _this.shapeSupport.update();
            _this.shapeSupport.draw();
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
            _this.shapeSupport.draw();
        };
        this.updateDrawSetting = function () {
            _this.drawingLayer.updateSetting(_this.toolbar.drawingSetting);
        };
        this.updateShapeSetting = function () {
            _this.stampLayer.updateSetting(_this.toolbar.shapeSetting);
        };
        this.layer = [];
        this.toolbar = new Toolbar();
        this.canvas = document.getElementById("canvas_drawing");
        this.canvas.width = 1024;
        this.canvas.height = 512;
        this.stage = new createjs.Stage(this.canvas);
        this.background = new createjs.Shape();
        this.background.graphics.beginFill("white");
        this.background.graphics.drawRect(0, 0, 1024, 512);
        this.stage.addChild(this.background);
        this.drawLayerContainer = new createjs.Container();
        this.stage.addChild(this.drawLayerContainer);
        this.shapeSupport = new ShapeSupport(this.stage);
        this.stage.addChild(this.shapeSupport.container);
        this.shapeSupport.container.x = 500;
        this.shapeSupport.container.y = 300;
        this.shapeSupport.size.x = 100;
        this.shapeSupport.size.y = 100;
        this.shapeSupport.update();
        this.shapeSupport.draw();
        createjs.Ticker.addEventListener("tick", this.update);
        this.toolbar.addEventListener('change_tab', this.changeTab);
        this.toolbar.addEventListener('change_tool', this.changeTool);
        this.stage.addEventListener("pressmove", this.handleMouseDown);
    }
    return App;
})();
var DrawingSetting = (function () {
    function DrawingSetting() {
        this.lineColor = "#000";
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
        this.draw = function () {
            var Graphics = createjs.Graphics;
            _this.graphics.clear();
            _this.graphics.setStrokeStyle(4.0);
            _this.graphics.beginStroke(_this.setting.lineColor);
            _this.graphics.beginFill(_this.setting.baseColor);
            _this.graphics.moveTo(_this.vertex[0].x, _this.vertex[0].y);
            var vertexLentgh = _this.vertex.length;
            for (var i = 1; i < vertexLentgh; i++) {
                _this.graphics.lineTo(_this.vertex[i].x, _this.vertex[i].y);
            }
            _this.graphics.endFill();
            _this.graphics.endStroke();
        };
        this.centerX = 0;
        this.centerY = 0;
        this.radius = 100;
        this.sides = 6;
        this.angle = 0;
        this.newMatrix = new createjs.Matrix2D();
        this.pointSize = 0.3;
        var Graphics = createjs.Graphics;
        this.graphics = new Graphics();
        this.shape = new createjs.Shape(this.graphics);
        this.setVertex();
        this.setMatrix(this.newMatrix);
        this.draw();
    }
    Star.prototype.setMatrix = function (matrix) {
        var vertexLentgh = this.vertex.length;
        for (var i = 0; i < vertexLentgh; i++) {
            this.vertex[i] = matrix.transformPoint(this.vertexOriginal[i].x, this.vertexOriginal[i].y);
        }
    };
    return Star;
})(Stamp);
var TextStamp = (function (_super) {
    __extends(TextStamp, _super);
    function TextStamp() {
        _super.call(this);
    }
    return TextStamp;
})(Stamp);
var TextStampLayer = (function (_super) {
    __extends(TextStampLayer, _super);
    function TextStampLayer(stage, stamp) {
        _super.call(this, stage, stamp);
    }
    TextStampLayer.prototype.updateSetting = function (setting) {
        this.stamp.setting.baseColor = setting.baseColor;
        this.stamp.setting.lineColor = setting.lineColor;
    };
    return TextStampLayer;
})(StampLayer);
var ShapeSupport = (function () {
    function ShapeSupport(stage) {
        var _this = this;
        this.startSupport = function () {
            _this.startDrag(_this.controllerRightBottom);
        };
        this.startDrag = function (dragTarget) {
            if (_this.dragTarget) {
                _this.stage.removeEventListener("pressup", _this.handlePressUp);
            }
            _this.dragTarget = dragTarget;
            _this.stage.addEventListener("pressup", _this.handlePressUp);
            _this.dragPoint.x = _this.stage.mouseX - (_this.dragTarget.x + _this.container.x);
            _this.dragPoint.y = _this.stage.mouseY - (_this.dragTarget.y + _this.container.y);
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
            var diffX = (_this.stage.mouseX - _this.container.x - _this.dragPoint.x) * 2;
            var diffY = (_this.stage.mouseY - _this.container.y - _this.dragPoint.y) * 2;
            var diff = _this.matrix.clone().invert().transformPoint(diffX, diffY);
            console.log(_this.matrix.transformPoint(diff.x, diff.y).x, _this.matrix.transformPoint(diff.x, diff.y).y);
            switch (_this.dragTarget) {
                case _this.baseShape:
                    console.log("baseShape - dragging");
                    _this.container.x = _this.stage.mouseX - _this.dragPoint.x;
                    _this.container.y = _this.stage.mouseY - _this.dragPoint.y;
                    break;
                case _this.controllerLeftTop:
                    console.log("leftTop - dragging");
                    _this.size.x = -diff.x;
                    _this.size.y = -diff.y;
                    break;
                case _this.controllerRightTop:
                    console.log("rightTop - dragging");
                    _this.size.x = diff.x;
                    _this.size.y = -diff.y;
                    break;
                case _this.controllerRightBottom:
                    console.log("rightBottom - dragging");
                    _this.size.x = diff.x;
                    _this.size.y = diff.y;
                    break;
                case _this.controllerLeftBottom:
                    console.log("leftBottom - dragging");
                    _this.size.x = -diff.x;
                    _this.size.y = diff.y;
                    break;
                case _this.controllerRotation:
                    console.log("rotation - dragging");
                    _this.rotation = Math.atan2(diffY, diffX) * 180 / Math.PI + 90 + (_this.size.y >= 0 ? 0 : 180);
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
        this.draw = function () {
            if (!_this.dragTarget) {
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
            graphics.clear().beginFill(color).beginStroke(_this.lineColor).
                moveTo(leftTop.x, leftTop.y).
                lineTo(leftTop.x, leftTop.y).
                lineTo(rightTop.x, rightTop.y).
                lineTo(rightBottom.x, rightBottom.y).
                lineTo(leftBottom.x, leftBottom.y).
                lineTo(leftTop.x, leftTop.y);
            graphics.moveTo(rotationPointStart.x, rotationPointStart.y).lineTo(rotationPoint.x, rotationPoint.y);
            _this.controllerLeftTop.setTransform(leftTop.x, leftTop.y, 1, 1, _this.rotation);
            _this.controllerRightTop.setTransform(rightTop.x, rightTop.y, 1, 1, _this.rotation);
            _this.controllerRightBottom.setTransform(rightBottom.x, rightBottom.y, 1, 1, _this.rotation);
            _this.controllerLeftBottom.setTransform(leftBottom.x, leftBottom.y, 1, 1, _this.rotation);
            _this.controllerRotation.setTransform(rotationPoint.x, rotationPoint.y, 1, 1, _this.rotation);
        };
        this.stage = stage;
        this.lineColor = "blue";
        this.center = new createjs.Point();
        this.rotation = 0;
        this.size = new createjs.Point();
        this.baseShape = new createjs.Shape();
        this.matrix = new createjs.Matrix2D();
        this.dragPoint = new createjs.Point();
        this.container = new createjs.Container();
        this.baseShape = new createjs.Shape();
        this.container.addChild(this.baseShape);
        this.baseShape.addEventListener("mousedown", this.handleMouseDown);
        this.controllerLeftTop = new createjs.Shape();
        this.container.addChild(this.controllerLeftTop);
        this.controllerLeftTop.addEventListener("mousedown", this.handleMouseDown);
        this.controllerRightTop = new createjs.Shape();
        this.container.addChild(this.controllerRightTop);
        this.controllerRightTop.addEventListener("mousedown", this.handleMouseDown);
        this.controllerLeftBottom = new createjs.Shape();
        this.container.addChild(this.controllerLeftBottom);
        this.controllerLeftBottom.addEventListener("mousedown", this.handleMouseDown);
        this.controllerRightBottom = new createjs.Shape();
        this.container.addChild(this.controllerRightBottom);
        this.controllerRightBottom.addEventListener("mousedown", this.handleMouseDown);
        this.controllerRotation = new createjs.Shape();
        this.container.addChild(this.controllerRotation);
        this.controllerRotation.addEventListener("mousedown", this.handleMouseDown);
        var controlSize = 10;
        this.controllerLeftTop.graphics.clear().beginFill("white").beginStroke(this.lineColor).
            drawRect(-controlSize / 2, -controlSize / 2, controlSize, controlSize).closePath();
        this.controllerRightTop.graphics.clear().beginFill("white").beginStroke(this.lineColor);
        this.controllerRightTop.graphics.drawRect(-controlSize / 2, -controlSize / 2, controlSize, controlSize).closePath();
        this.controllerRightBottom.graphics.clear().beginFill("white").beginStroke(this.lineColor).
            drawRect(-controlSize / 2, -controlSize / 2, controlSize, controlSize).closePath();
        this.controllerRotation.graphics.clear().beginFill("white").beginStroke(this.lineColor).
            drawRect(-controlSize / 2, -controlSize / 2, controlSize, controlSize).closePath();
        this.controllerLeftBottom.graphics.clear().beginFill("white").beginStroke(this.lineColor).
            drawRect(-controlSize / 2, -controlSize / 2, controlSize, controlSize).closePath();
    }
    return ShapeSupport;
})();
var app;
window.onload = function () {
    app = new App();
    var exportButton = document.getElementById("btn_export");
    exportButton.addEventListener("click", runExport);
};
var exporter;
function runExport(e) {
    exporter = new SVGExporter(app.stage, false, false, false);
    var t = new Date().getTime();
    exporter.run();
    setTimeout(downloadFile, 1);
}
function downloadFile() {
    var serializer = new XMLSerializer();
    var svgStr = serializer.serializeToString(exporter.svg);
    window.open("data:image/svg+xml,\n" + encodeURIComponent(svgStr));
}
//# sourceMappingURL=index.js.map