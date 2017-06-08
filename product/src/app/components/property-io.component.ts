import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { LocaleData } from "../i18n/locale-data";

"use strict";

@Component({
  selector:"property-io-box",
  templateUrl:"app/components-html/property-io-box.html"
})

export class PropertyIoModal {

  @ViewChild("modal") modal:any;
  @ViewChild("outputLink") outputLink:any;
  @ViewChild("jsonValue") jsonValue:any;

  @Input() drawingData:particlejs.DrawingData;

  element:ElementRef;

  constructor(element:ElementRef, private localeData:LocaleData) {
    this.element = element;
  }

  public setIOButtonLink(json:string) {
    var link = (<any>this.outputLink.nativeElement);

    link.download = "parameter.json";

    if (~navigator.userAgent.indexOf("Windows")) {
      json = json.replace(/\n/g, "\r\n").replace(/\r\r/g, "\r")
    }

    var blob = new Blob([json], {type:"text/plain"});

    link.href = window.URL.createObjectURL(blob);


    let textarea:HTMLTextAreaElement  = this.jsonValue.nativeElement;
    //  テキストエリアに値をセットする
    textarea.value = (json);
  }

  public openIOModal() {
    (<any>(this.modal.nativeElement)).modal('show');
  }
}
