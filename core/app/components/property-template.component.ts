import {Component} from "angular2/core";
import {DrawingData} from "../particle-system/src/data/data-drawing";
import {EventEmitter} from 'angular2/core';
import {ShapeData} from "../particle-system/src/data/data-shape";
import {ParticleParamater} from "../assets/particle-paramater";
import {OnInit} from "angular2/core";
import {LocaleData} from "../i18n/locale-data";

"use strict";

@Component({
  selector: "particle-template-property-panel",
  templateUrl: "app/components-html/property-template.html",
  inputs: ["drawingData", "templateList"]
})

export class PropertyTemplatePanel implements OnInit {
  private drawingData:DrawingData;
  private templateList:any[];
  private template:ParticleParamater;

  constructor(private localeData:LocaleData) {
    var template = new ParticleParamater();
    this.templateList = template.list;
  }

  ngOnInit() {
    // テンプレートを適用
    this.drawingData.into(this.templateList[0].property);
  }

  private selectTemplate(value:Object) {
    this.drawingData.into(value);
  }
}
