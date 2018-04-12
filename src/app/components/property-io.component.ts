import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {LocaleData} from '../i18n/locale-data';
import * as jQuery from 'jquery';

@Component({
  selector   : 'app-property-io-box',
  templateUrl: '../components-html/property-io-box.html'
})

export class PropertyIoModalComponent {

  @ViewChild('modal') modal: any;
  @ViewChild('outputLink') outputLink: any;
  @ViewChild('jsonValue') jsonValue: any;

  @Input() drawingData: particlejs.DrawingData;

  element: ElementRef;

  constructor(element: ElementRef, public localeData: LocaleData) {
    this.element = element;
  }

  public setIOButtonLink(json: string) {
    const link = (<any>this.outputLink.nativeElement);

    link.download = 'parameter.json';

    if (navigator.userAgent.indexOf('Windows') > -1) {
      json = json.replace(/\n/g, '\r\n').replace(/\r\r/g, '\r');
    }

    const blob = new Blob([json], {type: 'text/plain'});

    link.href = window.URL.createObjectURL(blob);


    const textarea: HTMLTextAreaElement = this.jsonValue.nativeElement;

    //  テキストエリアに値をセットする
    textarea.value = (json);
  }

  public openIOModal() {
    // 強引に連携
    jQuery(this.modal.nativeElement).modal('show');
  }
}
