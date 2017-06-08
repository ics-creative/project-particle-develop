import { LocaleData } from "../i18n/locale-data";
import { Component, Input, OnInit } from "@angular/core";
import { ParticleParameter } from "../assets/particle-parameter";s

"use strict";

@Component({
  selector:"small-particle-template-property-modal",
  templateUrl:"../components-html/property-template.html"
})

export class SmallPropertyTemplateModal implements OnInit {
  @Input() private drawingData:particlejs.DrawingData;
  @Input() private templateList:any[];
  private template:ParticleParameter;

  constructor(private localeData:LocaleData) {
    var template = new ParticleParameter();
    this.templateList = template.list;
  }

  ngOnInit() {
    // テンプレートを適用
    this.drawingData.importData(this.templateList[0].property);
  }

  private selectTemplate(value:particlejs.DrawingData) {
    this.drawingData.importData(value);
  }
}
