import {LocaleData} from '../i18n/locale-data';
import {Component, Input, OnInit} from '@angular/core';
import {ParticleParameter} from '../assets/particle-parameter';

@Component({
  selector   : 'app-small-particle-template-property-modal',
  templateUrl: '../components-html/property-template.html'
})

export class SmallPropertyTemplateModalComponent implements OnInit {
  @Input() drawingData: particlejs.DrawingData;
  @Input() templateList: any[];
  private template: ParticleParameter;

  constructor(public localeData: LocaleData) {
    const template    = new ParticleParameter();
    this.templateList = template.list;
  }

  ngOnInit() {
    // テンプレートを適用
    this.drawingData.importData(this.templateList[0].property);
  }

  private selectTemplate(value: particlejs.DrawingData) {
    this.drawingData.importData(value);
  }
}
