import {Component} from "angular2/core";
import {EventEmitter} from 'angular2/core';
import {ParticleParameter} from "../assets/particle-parameter";
import {OnInit} from "angular2/core";
import {LocaleData} from "../i18n/locale-data";

"use strict";

@Component({
  selector: "particle-template-property-panel",
  templateUrl: "app/components-html/property-template.html",
  inputs: ["drawingData", "templateList"]
})

export class PropertyTemplatePanel implements OnInit {
  private drawingData:particlejs.DrawingData;
  private templateList:any[];
  private template:ParticleParameter;

  constructor(private localeData:LocaleData) {
    var template = new ParticleParameter();
    this.templateList = template.list;
  }

  ngOnInit() {
    // テンプレートを適用
    this.drawingData.importData(this.templateList[0].property);
  }

  private selectTemplate(value:Object) {
    this.drawingData.importData(value);
  }
}
