import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector   : 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls  : ['header-mobile.component.scss'],
})
export class HeaderMobileComponent {
  @Output() private exportPngEvent = new EventEmitter();

  @Input() private drawingData: particlejs.DrawingData;
  private element: ElementRef;

  exportPng() {
    this.exportPngEvent.emit(null);
  }

  constructor(element: ElementRef) {
    this.element = element;
  }
}
