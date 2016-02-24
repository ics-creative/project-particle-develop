import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {DrawingData} from "../particle-system/src/data/data-drawing";
import {EventEmitter} from 'angular2/core';
import {ShapeData} from "../particle-system/src/data/data-shape";
import {ParticleParameter} from "../assets/particle-parameter";
import {OnInit} from "angular2/core";

"use strict";

@Component({
  selector: "small-particle-template-property-modal",
  templateUrl: "app/components-html/property-template.html",
  inputs: ["drawingData", "templateList"]
})

export class SmallPropertyTemplateModal implements OnInit {
  private drawingData:DrawingData;
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
