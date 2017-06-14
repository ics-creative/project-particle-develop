import {LocaleData} from '../i18n/locale-data';
import {Component, Input} from '@angular/core';

@Component({
  selector   : 'app-particle-property-panel',
  templateUrl: '../components-html/property-particle.html'
})

export class PropertyParticlePanelComponent {
  @Input() drawingData: particlejs.DrawingData;
  @Input() shapeIdList: any;

  constructor(public localeData: LocaleData) {
  }
}
