import {LocaleData} from '../i18n/locale-data';
import {Component, Input} from '@angular/core';
@Component({
  selector   : 'app-property-panel',
  templateUrl: '../components-html/property.html'
})
export class PropertyPanelComponent {
  @Input() public drawingData: particlejs.DrawingData;

  constructor(public localeData: LocaleData) {
  }

}
