import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {DrawingData} from "../data/data-drawing";
import {InputRangeComponent} from "./input-range.component";

"use strict";

@Component({
  selector: "canvas-property-panel",
  templateUrl: "app/components-html/property-canvas.html",
  inputs: ["drawingData"],
  directives: [InputRangeComponent]
})

export class PropertyCanvasPanel {
  private drawingData:DrawingData;

  constructor(private localeData:LocaleData) {
  }
}
