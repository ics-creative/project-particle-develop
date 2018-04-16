import {Component, Input, OnInit} from '@angular/core';
import {ParticleParameter} from '../../assets/particle-parameter';
import {LocaleData} from '../../i18n/locale-data';

@Component({
  selector   : 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls  : ['./modal-template.component.scss'],
})

export class ModalTemplateComponent implements OnInit {
  @Input() drawingData: particlejs.DrawingData;
  @Input() templateList: any[];
  public template: ParticleParameter;

  constructor(public localeData: LocaleData) {
    const template = new ParticleParameter();
    this.templateList = template.list;
  }

  ngOnInit() {
    // テンプレートを適用
    this.drawingData.importData(this.templateList[0].property);
  }

  public selectTemplate(value: particlejs.DrawingData) {
    this.drawingData.importData(value);
  }
}
