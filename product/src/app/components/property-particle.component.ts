import {LocaleData} from '../i18n/locale-data';
import {Component, Input} from '@angular/core';

@Component({
  selector   : 'particle-property-panel',
  templateUrl: '../components-html/property-particle.html'
})

export class PropertyParticlePanel {
  @Input() private drawingData: particlejs.DrawingData;
  @Input() private shapeIdList: any;

  constructor(private localeData: LocaleData) {
  }
}
