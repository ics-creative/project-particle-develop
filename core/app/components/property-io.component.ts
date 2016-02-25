import {Component, EventEmitter} from "angular2/core";
import {LocaleData} from "../i18n/locale-data";
import {LocaleEnData} from "../i18n/locale-en";
import {LocaleJaData} from "../i18n/locale-ja";
import {ViewChild} from "angular2/core";
import {ElementRef} from "angular2/core";

"use strict";

@Component({
  selector: "property-io-box",
  templateUrl: "app/components-html/property-io-box.html",
  inputs: ["drawingData"],
  events: []
})

export class PropertyIoModal implements AfterViewInit {

  @ViewChild("modal") modal:any;
  @ViewChild("outputLink") outputLink:any;
  @ViewChild("jsonValue") jsonValue:any;

  element:ElementRef;

  constructor(element:ElementRef, private localeData:LocaleData) {
    this.element = element;
  }

  public setIOButtonLink(json:string) {
    var link =  (<HTMLLinkElement>this.outputLink.nativeElement);

    link.download = "paramater.json";
    var blob = new Blob([json], {type: "application/json"});
    link.href = window.URL.createObjectURL( blob );

    this.jsonValue.nativeElement.value =  (json);
  }

  public openIOModal() {
   $(this.modal.nativeElement).modal('show');
  }
}
