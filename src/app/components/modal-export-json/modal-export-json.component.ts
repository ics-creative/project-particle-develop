import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import * as jQuery from 'jquery';
import {DrawingData} from 'particlejs';
import {LocaleData} from '../../i18n/locale-data';

@Component({
  selector   : 'app-property-io-box',
  templateUrl: './modal-export-json.component.html',
  styleUrls  : ['./modal-export-json.component.scss'],
})

export class ModalExportJsonComponent {

  @ViewChild('modal', { static: true }) modal: any;
  @ViewChild('outputLink', { static: true }) outputLink: any;
  @ViewChild('jsonValue', { static: true }) jsonValue: any;

  @Input() drawingData!: DrawingData;

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
    (jQuery(this.modal.nativeElement) as any).modal('show');
  }
}
