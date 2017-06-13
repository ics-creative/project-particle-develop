import {LocaleData} from '../i18n/locale-data';
import {Component, Input} from '@angular/core';

@Component({
  selector   : 'color-unit-property-panel',
  templateUrl: '../components-html/property-color-unit.html'
})
export class PropertyColorUnit {
  @Input() public colorData: particlejs.ColorData;

  constructor(private localeData: LocaleData) {
  }

}
