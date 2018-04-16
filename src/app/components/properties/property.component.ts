import {Component, Input} from '@angular/core';
import {LocaleData} from '../../i18n/locale-data';

@Component({
  selector   : 'app-property-panel',
  templateUrl: './property.component.html',
  styleUrls  : ['property.component.scss'],
})
export class PropertyPanelComponent {
  @Input() public drawingData: particlejs.DrawingData;

  constructor(public localeData: LocaleData) {
  }
}
