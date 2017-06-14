import {LocaleData} from '../i18n/locale-data';
import {Component, Input} from '@angular/core';

@Component({
  selector   : 'app-canvas-property-panel',
  templateUrl: '../components-html/property-canvas.html'
})

export class PropertyCanvasPanelComponent {
  @Input() public drawingData: particlejs.DrawingData;


  constructor(public localeData: LocaleData) {
  }
}
