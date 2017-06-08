import { LocaleData } from "../i18n/locale-data";
import { Component, Input } from "@angular/core";

"use strict";

@Component({
  selector:"emitter-property-panel"
})

export class PropertyEmitterPanel {
  @Input() private drawingData:particlejs.DrawingData;

  constructor(private localeData:LocaleData) {
  }
}
