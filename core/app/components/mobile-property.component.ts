import {Component} from "angular2/core";
import {DrawingData} from "./drawing-data";
import {EventEmitter} from 'angular2/core';
import {ElementRef} from "angular2/core";

@Component({
    selector: "mobile-property-panel",
    templateUrl: "app/components/template/mobile-property.html",
    inputs: ["drawingData"],
    events: [
        "exportPNGEvent",
        "importCameraEvent"
    ]
})

export class MobilePropertyPanel {
    private exportPNGEvent = new EventEmitter();
    private importCameraEvent = new EventEmitter();

    private drawingData:DrawingData;
    private element:ElementRef;

    exportPNG() {
        this.exportPNGEvent.emit(null);
    }

    importCamera() {
        this.importCameraEvent.emit(null);
    }

    constructor(element:ElementRef) {
        this.element = element;
    }
}