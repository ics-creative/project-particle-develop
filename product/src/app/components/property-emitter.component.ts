import { LocaleData } from "../i18n/locale-data";
import { Component, EventEmitter } from "@angular2/core";
import { Input } from "@angular/core";
å
"use strict";

@Component({
  selector:"emitter-property-panel"
})

export class PropertyEmitterPanel {
  @Input() private drawingData:particlejs.DrawingData;

  constructor(private localeData:LocaleData) {
  }
}
