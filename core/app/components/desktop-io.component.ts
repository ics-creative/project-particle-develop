import {Component, EventEmitter} from "angular2/core";
import {DrawingData} from "../data/data-drawing";
import {LocaleData} from "../i18n/locale-data";
import {LocaleEnData} from "../i18n/locale-en";
import {LocaleJaData} from "../i18n/locale-ja";
import {LocaleManager} from "../i18n/locale-manager";

"use strict";

@Component({
  selector: "desktop-io-box",
  templateUrl: "app/components-html/desktop-io-box.html",
  inputs: ["drawingData"],
  events: [
    "exportSvgEvent",
    "exportPngEvent",
    "exportJpgEvent",
    "exportParamaterEvent"
  ]
})

export class DesktopIoBox {
  private exportSvgEvent:EventEmitter = new EventEmitter();
  private exportPngEvent:EventEmitter = new EventEmitter();
  private exportJpgEvent:EventEmitter = new EventEmitter();
  private exportParamaterEvent:EventEmitter = new EventEmitter();
  private drawingData:DrawingData;

  constructor(private localeData:LocaleData) {
  }

  public exportParamater():void {
    this.exportParamaterEvent.emit(null);
  }

  public exportSvg():void {
    this.exportSvgEvent.emit(null);
  }

  public exportPng():void {
    this.exportPngEvent.emit(null);
  }

  public exportJpg():void {
    this.exportJpgEvent.emit(null);
  }

  private selectParameterFile(obj:any):void {
    this.importParameterFile(obj.target.files[0])
  }

  private importParameterFile(file:File):void {
    // ファイルの内容は FileReader で読み込みます.
    let fileReader = new FileReader();
    fileReader.onload = (event) => {
      // event.target.result に読み込んだファイルの内容が入っています。
      var json = (<FileReader>event.target).result;
      let object = JSON.parse(json);

      this.drawingData.into(object);
    };
    fileReader.readAsText(file);
  }



  private selectEn():void {
    LocaleManager.changeLocale(this.localeData, new LocaleEnData());
  }

  private selectJa():void {
    LocaleManager.changeLocale(this.localeData, new LocaleJaData());
  }

}
