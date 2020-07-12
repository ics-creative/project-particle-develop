import {Component, Input} from '@angular/core';
import {DrawingData} from 'particlejs';
import {LocaleData} from '../../../i18n/locale-data';

@Component({
  selector   : 'app-canvas-property-panel',
  templateUrl: './property-canvas.component.html',
  styleUrls  : ['property-canvas.component.scss'],
})

export class PropertyCanvasPanelComponent {
  @Input() public drawingData!: DrawingData;

  constructor(public localeData: LocaleData) {
  }
}
