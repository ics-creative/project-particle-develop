import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector   : 'app-small-io-box',
  templateUrl: '../components-html/small-io-box.html'
})
export class SmallIoBoxComponent {
  @Output() private exportPngEvent    = new EventEmitter();

  @Input() private drawingData: particlejs.DrawingData;
  private element: ElementRef;

  exportPng() {
    this.exportPngEvent.emit(null);
  }

  constructor(element: ElementRef) {
    this.element = element;
  }
}
