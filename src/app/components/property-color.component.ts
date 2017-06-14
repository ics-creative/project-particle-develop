import {LocaleData} from '../i18n/locale-data';
import {Component, Input} from '@angular/core';

interface TestObject {
  name: string;
  value: number;
}

@Component({
  selector   : 'app-color-property-panel',
  templateUrl: '../components-html/property-color.html'
})

export class PropertyColorPanelComponent {
  @Input() public drawingData: particlejs.DrawingData;
  public objArray: TestObject[];

  constructor(public localeData: LocaleData) {
    this.objArray = [
      {name: 'Normal', value: particlejs.AlphaCurveType.Normal},
      {name: 'Random', value: particlejs.AlphaCurveType.Random}
    ];
  }
}
