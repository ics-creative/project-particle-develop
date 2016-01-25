import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {DrawingData} from "../data/data-drawing";
import {EventEmitter} from 'angular2/core';
import {ShapeData} from "../data/data-shape";
import {ParticleParamater} from "../assets/particle-paramater";
import {OnInit} from "angular2/core";

"use strict";

@Component({
  selector: "mobile-particle-template-property-modal",
  templateUrl: "app/components-html/property-template.html",
  inputs: ["drawingData", "templateList"]
})

export class MobilePropertyTemplateModal implements OnInit {
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
