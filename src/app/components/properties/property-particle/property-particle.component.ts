import {DrawingData} from 'particlejs';
import {LocaleData} from '../../../i18n/locale-data';
import {Component, Input} from '@angular/core';

@Component({
  selector   : 'app-particle-property-panel',
  templateUrl: './property-particle.component.html'
})

export class PropertyParticlePanelComponent {
  @Input() drawingData: DrawingData;
  @Input() shapeIdList: any;

  constructor(public localeData: LocaleData) {
  }
}
