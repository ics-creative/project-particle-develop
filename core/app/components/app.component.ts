///<reference path="stage.component.ts"/>
///<reference path="property.component.ts"/>
///<reference path="shape-property.component.ts"/>
import {Component} from "angular2/core";
import {DrawingData} from "../data/drawing-data";
import {PropertyPanel} from "./property.component";
import {MobilePropertyPanel} from "./mobile-property.component";
import {ShapePropertyModal} from "./shape-property.component";
import {StageComponent} from "./stage.component";
import {ViewChild} from "angular2/core";
import {ParticleShapeTypes} from "../particle/particle-shape-types";
import {ElementRef} from "angular2/core";

@Component({
    selector: `my-app`,
    templateUrl: "app/components/template/app.html",
    directives: [StageComponent, PropertyPanel, MobilePropertyPanel, ShapePropertyModal],
})

export class AppComponent {
    private drawingData:DrawingData;
    @ViewChild("stageComponent") stageComponent:StageComponent;
    @ViewChild("propertyPanel") propertyPanel:PropertyPanel;
    @ViewChild("mobilePropertyPanel") mobilePropertyPanel:MobilePropertyPanel;

    handleSVGClick() {
        this.stageComponent.exportSVG().then(this.openSVGExportWindow);
    }

    openSVGExportWindow = () => {
        window.open("data:image/svg+xml,\n" + encodeURIComponent(this.stageComponent.getParticleSVGString()));
    };

    handleExportParamaterClick() {
        window.open("data:text/plain;charset=UTF-8,\n" + encodeURIComponent(JSON.stringify(this.drawingData)));
    }

    constructor(element:ElementRef) {
        this.drawingData = new DrawingData();
    }
}