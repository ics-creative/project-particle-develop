import {LocaleData} from '../i18n/locale-data';
import {Component, Input} from '@angular/core';
@Component({
  selector   : 'property-panel',
  templateUrl: '../components-html/property.html'
})
export class PropertyPanelComponent {
  @Input() private drawingData: particlejs.DrawingData;

  constructor(private localeData: LocaleData) {
  }

}
