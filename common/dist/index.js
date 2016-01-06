var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Stamp = (function () {
    function Stamp() {
        this.draw = function () {
        };
    }
    Stamp.prototype.setMatrix = function (matrix) {
    };
    return Stamp;
})();
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
            _this.graphics.beginStroke(Graphics.getRGB(0, 0, 0));
            _this.graphics.beginFill(Graphics.getRGB(255, 0, 0));
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
        this.sides = 5;
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
        console.log("setmatrix", matrix);
        var vertexLentgh = this.vertex.length;
        for (var i = 0; i < vertexLentgh; i++) {
            this.vertex[i] = matrix.transformPoint(this.vertexOriginal[i].x, this.vertexOriginal[i].y);
        }
    };
    return Star;
})(Stamp);
var StampLayer = (function () {
    function StampLayer(stage, stamp) {
        var _this = this;
        this.handleMouseDown = function () {
            if (_this.mousedown) {
                return;
            }
            _this.mousedown = true;
            _this.stamp.shape.x = _this.stage.mouseX;
            _this.stamp.shape.y = _this.stage.mouseY;
            _this.stamp.draw();
        };
        this.scaleUpdate = function () {
            var diffX = Math.abs(_this.stamp.shape.x - _this.stage.mouseX);
            var diffY = Math.abs(_this.stamp.shape.y - _this.stage.mouseY);
            var scale = Math.max(diffX, diffY) / 100;
            _this.stamp.newMatrix = new createjs.Matrix2D;
            _this.stamp.newMatrix.scale(scale, scale);
            _this.stamp.setMatrix(_this.stamp.newMatrix);
            _this.stamp.draw();
            console.log(scale);
        };
        this.handleMouseUp = function () {
            _this.mousedown = false;
        };
        this.stage = stage;
        this.stamp = stamp;
        this.locked = false;
    }
    return StampLayer;
})();
var DrawingLayer = (function () {
    function DrawingLayer(stage, container, width, height, color) {
        var _this = this;
        this.changeColor = function (color) {
            _this.color = color;
        };
        this.handleMouseDown = function () {
            if (_this.mousedown) {
                return;
            }
            _this.mousedown = true;
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
            console.log("mouseDown");
        };
        this.handleMouseUp = function () {
            _this.mousedown = false;
        };
        this.draw = function () {
            if (!_this.mousedown)
                return;
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
        this.color = color;
        this.stage = stage;
        this.container = container;
        this.lastMidPoint = new createjs.Point();
        this.currentLineThickness = 1;
        this.width = width;
        this.height = height;
    }
    DrawingLayer.prototype.drawCurve = function (graphics, oldPoint, newPoint, controlPoint) {
        this.setLineThickness(oldPoint, newPoint);
        graphics.beginStroke(this.color)
            .setStrokeStyle(this.currentLineThickness, "round", "round")
            .moveTo(oldPoint.x, oldPoint.y)
            .quadraticCurveTo(controlPoint.x, controlPoint.y, newPoint.x, newPoint.y);
    };
    DrawingLayer.prototype.setLineThickness = function (oldPoint, newPoint) {
        var distanceX = newPoint.x - oldPoint.x;
        var distanceY = newPoint.y - oldPoint.y;
        var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        var lineThickness = distance * 0.2;
        this.currentLineThickness = 1;
    };
    return DrawingLayer;
})();
var tool;
(function (tool) {
    tool.TOOL_PEN = "tool-pen";
    tool.TOOL_STAMP = "tool-stamp";
})(tool || (tool = {}));
var Toolbar = (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar() {
        var _this = this;
        _super.call(this);
        this.changeTab = function (tabName) {
            _this.toolPenParametersElement.style.display = 'none';
            _this.toolStampParametersElement.style.display = 'none';
            document.getElementById(tabName + '-parameters').style.display = 'block';
            _this.toolId = tabName;
            _this.dispatchEvent("change_tab");
        };
        this.toolId = tool.TOOL_PEN;
        createjs.EventDispatcher.initialize(Toolbar.prototype);
        this.toolPenElement = document.getElementById(tool.TOOL_PEN);
        this.toolStampElement = document.getElementById(tool.TOOL_STAMP);
        this.toolPenParametersElement = document.getElementById('tool-pen-parameters');
        this.toolStampParametersElement = document.getElementById('tool-stamp-parameters');
        this.toolPenElement.addEventListener("click", function (e) {
            _this.changeTab(tool.TOOL_PEN);
        });
        this.toolStampElement.addEventListener("click", function (e) {
            _this.changeTab(tool.TOOL_STAMP);
        });
        $("#tool-pen-parameters #colorpicker").spectrum({
            showPalette: true,
            color: "#000",
            change: function (color) {
                app.changeColor(color.toHexString());
            }
        });
    }
    return Toolbar;
})(createjs.EventDispatcher);
var App = (function () {
    function App() {
        var _this = this;
        this.handleMouseDown = function () {
            console.log("handleMouseDown" + _this.toolbar.toolId);
            switch (_this.toolbar.toolId) {
                case tool.TOOL_PEN:
                    if (_this.layer.length == 0 || _this.layer[_this.layer.length - 1] != _this.drawingLayer) {
                        var container = new createjs.Container();
                        _this.stage.addChild(container);
                        _this.drawingLayer = new DrawingLayer(_this.stage, container, _this.canvas.width, _this.canvas.height, "#000");
                        _this.layer.push(_this.drawingLayer);
                    }
                    _this.drawingLayer.handleMouseDown();
                    break;
                case tool.TOOL_STAMP:
                    if (_this.layer.length == 0 || _this.stampLayer == null || !_this.stampLayer.locked) {
                        var stamp = new Star();
                        _this.stampLayer = new StampLayer(_this.stage, stamp);
                        _this.stampLayer.locked = true;
                        _this.stage.addChild(_this.stampLayer.stamp.shape);
                        _this.layer.push(_this.stampLayer);
                        _this.stampLayer.handleMouseDown();
                    }
                    else {
                        if (_this.stampLayer.locked) {
                            _this.stampLayer.scaleUpdate();
                        }
                    }
                    break;
            }
        };
        this.handleMouseUp = function () {
            console.log("handleMouseUp");
            switch (_this.toolbar.toolId) {
                case tool.TOOL_PEN:
                    if (_this.drawingLayer) {
                        _this.drawingLayer.handleMouseUp();
                    }
                    break;
                case tool.TOOL_STAMP:
                    if (_this.stampLayer) {
                        _this.stampLayer.locked = false;
                    }
                    break;
            }
        };
        this.changeTab = function () {
            console.log("tabChanged");
        };
        this.update = function () {
            if (_this.drawingLayer) {
                _this.drawingLayer.draw();
            }
            _this.stage.update();
        };
        this.changeColor = function (color) {
            _this.drawingLayer.changeColor(color);
        };
        this.layer = [];
        this.toolbar = new Toolbar();
        this.canvas = document.getElementById("canvas_drawing");
        this.canvas.width = 1024;
        this.canvas.height = 512;
        this.stage = new createjs.Stage(this.canvas);
        var shape = new createjs.Shape();
        shape.graphics.beginFill("white");
        shape.graphics.drawRect(0, 0, 1024, 512);
        this.stage.addChild(shape);
        createjs.Ticker.addEventListener("tick", this.update);
        this.toolbar.addEventListener('change_tab', this.changeTab);
        this.stage.addEventListener("pressmove", this.handleMouseDown);
        this.stage.addEventListener("pressup", this.handleMouseUp);
    }
    return App;
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