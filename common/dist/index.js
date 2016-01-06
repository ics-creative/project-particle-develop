var DrawingLayer = (function () {
    function DrawingLayer(stage, container, width, height) {
        var _this = this;
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
        this.stage = stage;
        this.container = container;
        this.lastMidPoint = new createjs.Point();
        this.currentLineThickness = 1;
        this.width = width;
        this.height = height;
        stage.addEventListener("pressmove", this.handleMouseDown);
        stage.addEventListener("pressup", this.handleMouseUp);
    }
    DrawingLayer.prototype.drawCurve = function (graphics, oldPoint, newPoint, controlPoint) {
        this.setLineThickness(oldPoint, newPoint);
        graphics.beginStroke("black")
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
var App = (function () {
    function App() {
        var _this = this;
        this.update = function () {
            _this.drawingLayer.draw();
            _this.stage.update();
        };
        var canvas = document.getElementById("canvas_drawing");
        canvas.width = 1024;
        canvas.height = 512;
        this.stage = new createjs.Stage(canvas);
        var shape = new createjs.Shape();
        shape.graphics.beginFill("white");
        shape.graphics.drawRect(0, 0, 1024, 512);
        this.stage.addChild(shape);
        var container = new createjs.Container();
        this.stage.addChild(container);
        this.drawingLayer = new DrawingLayer(this.stage, container, canvas.width, canvas.height);
        createjs.Ticker.addEventListener("tick", this.update);
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