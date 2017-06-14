import {LocaleData} from '../i18n/locale-data';
import {Component, Input} from '@angular/core';

@Component({
  selector   : 'app-emitter-property-panel',
  templateUrl: '../components-html/property-emitter.html'
})

export class PropertyEmitterPanelComponent {
  @Input() public drawingData: particlejs.DrawingData;

  constructor(public localeData: LocaleData) {
  }
}
