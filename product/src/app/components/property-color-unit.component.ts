import { LocaleData } from "../i18n/locale-data";
import { Component, Input } from "@angular/core";

"use strict";

@Component({
  selector:"color-unit-property-panel",
  templateUrl:"app/components-html/property-color-unit.html"
})
export class PropertyColorUnit {
  @Input() private colorData:particlejs.ColorData;

  constructor(private localeData:LocaleData) {
  }
}
