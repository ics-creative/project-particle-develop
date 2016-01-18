System.register(["../../node_modules/angular2/core.d"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_d_1;
    var template, ShapePropertyModal;
    return {
        setters:[
            function (core_d_1_1) {
                core_d_1 = core_d_1_1;
            }],
        execute: function() {
            template = "\n<div class=\"modal fade\" id=\"ShapeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n          aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Shapes</h4>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"col-sm-3\" (click)=\"selectShape('star')\">\n          \u2606\n        </div>\n        <div class=\"col-sm-3\" (click)=\"selectShape('heart')\">\n          \u2661\n        </div>\n        <div class=\"col-sm-3\"(click)=\"selectShape('mail-face')\">\n          \u3020\n        </div>\n        <div class=\"col-sm-3\" (click)=\"selectShape('mail-mark')\">\n          \u3012\n        </div>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveChanges()\" data-dismiss=\"modal\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
            ShapePropertyModal = (function () {
                function ShapePropertyModal() {
                    var _this = this;
                    this.selectShape = function (shapeId) {
                        console.log("selectapp:" + shapeId);
                        //  ラジオボタンとかにすればテンポラリ選択不要そう
                        _this.temporarySelect = shapeId;
                    };
                    this.saveChanges = function () {
                        // TODO:配列で選択できるようにする
                        _this.drawingData.shapeIdList = [_this.temporarySelect];
                    };
                }
                ShapePropertyModal = __decorate([
                    core_d_1.Component({
                        selector: "shape-property-modal",
                        template: template,
                        inputs: ["drawingData"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShapePropertyModal);
                return ShapePropertyModal;
            })();
            exports_1("ShapePropertyModal", ShapePropertyModal);
        }
    }
});
//# sourceMappingURL=shape-property.component.js.map