import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {DrawingData} from 'particlejs';

@Component({
  selector   : 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls  : ['header-mobile.component.scss'],
})
export class HeaderMobileComponent {
  @Output() exportPngEvent = new EventEmitter();

  @Input() drawingData: DrawingData;
  private element: ElementRef;

  exportPng() {
    this.exportPngEvent.emit(null);
  }

  constructor(element: ElementRef) {
    this.element = element;
  }
}
