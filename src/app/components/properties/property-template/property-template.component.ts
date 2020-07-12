import {Component, Input, OnInit} from '@angular/core';
import {DrawingData} from 'particlejs';
import {ParticleParameter} from '../../../assets/particle-parameter';
import {LocaleData} from '../../../i18n/locale-data';

@Component({
  selector   : 'app-particle-template-property-panel',
  styleUrls     : ['./property-template.component.scss'],
  templateUrl: './property-template.component.html',
})


export class PropertyTemplatePanelComponent implements OnInit {
  @Input() drawingData!: DrawingData;
  @Input() templateList: any[];
  public public!: ParticleParameter;

  constructor(public localeData: LocaleData) {
    const template = new ParticleParameter();

    this.templateList = template.list;
  }

  ngOnInit() {
    // テンプレートを適用
    this.drawingData.importData(this.templateList[0].property);
  }

  public selectTemplate(value: DrawingData) {
    this.drawingData.importData(value);
  }
}
