import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {EventEmitter} from 'angular2/core';
import {ParticleParameter} from "../assets/particle-parameter";
import {OnInit} from "angular2/core";

"use strict";

@Component({
  selector: "small-particle-template-property-modal",
  template: `<div class="card text-xs-center">
  <header class="card-header">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span></button>
    <h3>{{localeData.ST_head}}</h3>
  </header>
  <hr>
  <div class="card-block row">
    <figure *ngFor="#template of templateList"
            (click)="selectTemplate(template.property)">
      <img class="media-object" src="images/particle-template/{{template.imageId}}.png" width="128" height="128"/>
      <figcaption>{{template.name}}</figcaption>
    </figure>
  </div>
  <footer class="card-footer modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
  </footer>
</div>
`,
  inputs: ["drawingData", "templateList"]
})

export class SmallPropertyTemplateModal implements OnInit {
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

  private selectTemplate(value:particlejs.DrawingData) {
    this.drawingData.importData(value);
  }
}
