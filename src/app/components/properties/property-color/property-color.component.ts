import {Component, Input} from '@angular/core';
import {AlphaCurveType, DrawingData} from 'particlejs';
import {LocaleData} from '../../../i18n/locale-data';

interface TestObject {
  name: string;
  value: number;
}

@Component({
  selector   : 'app-color-property-panel',
  templateUrl: './property-color.component.html',
  styleUrls  : ['./property-color.component.scss'],
})

export class PropertyColorPanelComponent {
  @Input() public drawingData!: DrawingData;
  public objArray: TestObject[];

  constructor(public localeData: LocaleData) {
    this.objArray = [
      {name: 'Normal', value: AlphaCurveType.Normal},
      {name: 'Random', value: AlphaCurveType.Random},
    ];
  }
}
