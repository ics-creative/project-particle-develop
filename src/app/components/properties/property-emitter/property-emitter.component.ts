import {DrawingData} from 'particlejs';
import {LocaleData} from '../../../i18n/locale-data';
import {Component, Input} from '@angular/core';

@Component({
  selector   : 'app-emitter-property-panel',
  templateUrl: './property-emitter.component.html'
})

export class PropertyEmitterPanelComponent {
  @Input() public drawingData!: DrawingData;

  constructor(public localeData: LocaleData) {
  }
}
