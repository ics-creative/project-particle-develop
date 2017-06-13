import {LocaleData} from '../i18n/locale-data';
import {Component, Input} from '@angular/core';

@Component({
  selector   : 'emitter-property-panel',
  templateUrl: '../components-html/property-emitter.html'
})

export class PropertyEmitterPanelComponent {
  @Input() private drawingData: particlejs.DrawingData;

  constructor(private localeData: LocaleData) {
  }
}
