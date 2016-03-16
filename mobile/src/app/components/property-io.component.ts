import {Component, EventEmitter} from "angular2/core";
import {LocaleData} from "../i18n/locale-data";
import {LocaleEnData} from "../i18n/locale-en";
import {LocaleJaData} from "../i18n/locale-ja";
import {ViewChild} from "angular2/core";
import {ElementRef} from "angular2/core";

"use strict";

@Component({
  selector: "property-io-box",
  template: `<div #modal class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog"
     aria-labelledby="myLargeModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-xs-center">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">{{localeData.MC_head}}</h4>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <textarea #jsonValue type="text" class="form-control" id="properties-name"></textarea>
          </div>
        </form>
        <a #outputLink type="button" class="btn btn-secondary">{{localeData.MC_button}}</a>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`,
  inputs: ["drawingData"],
  events: []
})

export class PropertyIoModal {

  @ViewChild("modal") modal:any;
  @ViewChild("outputLink") outputLink:any;
  @ViewChild("jsonValue") jsonValue:any;

  element:ElementRef;

  constructor(element:ElementRef, private localeData:LocaleData) {
    this.element = element;
  }

  public setIOButtonLink(json:string) {
    var link = (<any>this.outputLink.nativeElement);

    link.download = "parameter.json";

    if ( ~navigator.userAgent.indexOf("Windows") ) {
      json = json.replace(/\n/g, "\r\n").replace(/\r\r/g, "\r")
    }
    
    var blob = new Blob([json], {type: "text/plain"});

    link.href = window.URL.createObjectURL(blob);


    let textarea:HTMLTextAreaElement = this.jsonValue.nativeElement;
    //  テキストエリアに値をセットする
    textarea.value = (json);
  }

  public openIOModal() {
    (<any>$(this.modal.nativeElement)).modal('show');
  }
}
