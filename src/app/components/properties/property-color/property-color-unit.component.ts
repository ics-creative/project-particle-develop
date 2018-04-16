import {LocaleData} from '../../../i18n/locale-data';
import {Component, Input} from '@angular/core';

@Component({
  selector   : 'app-color-unit-property-panel',
  templateUrl: './property-color-unit.component.html'
})
export class PropertyColorUnitComponent {
  @Input() public colorData: particlejs.ColorData;

  constructor(public localeData: LocaleData) {
  }

}
