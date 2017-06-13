import {LocaleData} from '../i18n/locale-data';
import {Component, Input} from '@angular/core';

interface TestObject {
  name: string;
  value: number;
}

@Component({
  selector   : 'color-property-panel',
  templateUrl: '../components-html/property-color.html'
})

export class PropertyColorPanel {
  @Input() private drawingData: particlejs.DrawingData;
  private objArray: TestObject[];

  constructor(private localeData: LocaleData) {
    this.objArray = [
      {name: 'Normal', value: particlejs.AlphaCurveType.Normal},
      {name: 'Random', value: particlejs.AlphaCurveType.Random}
    ];
  }
}
