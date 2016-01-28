import {Component, EventEmitter} from "angular2/core";
import {DrawingData} from "../data/data-drawing";
import {LocaleData} from "../i18n/locale-data";
import {LocaleEnData} from "../i18n/locale-en";
import {LocaleJaData} from "../i18n/locale-ja";
import {LocaleManager} from "../i18n/locale-manager";
import {PlatformData} from "../data/platform-data";

"use strict";

@Component({
  selector: "desktop-io-box",
  templateUrl: "app/components-html/desktop-io-box.html",
  inputs: ["drawingData", "platformData"],
  events: [
    "exportSvgEvent",
    "exportPngEvent",
    "exportJpgEvent",
    "exportWebpEvent",
    "exportParamaterEvent"
  ]
})

export class DesktopIoBox {
  private exportSvgEvent = new EventEmitter();
  private exportPngEvent = new EventEmitter();
  private exportJpgEvent = new EventEmitter();
  private exportWebpEvent = new EventEmitter();
  private exportParamaterEvent = new EventEmitter();

  private drawingData:DrawingData;
  private platformData:PlatformData;

  constructor(private localeData:LocaleData) {
  }

  private exportParamater():void {
    this.exportParamaterEvent.emit(null);
  }

  private exportSvg():void {
    this.exportSvgEvent.emit(null);
  }

  private exportPng():void {
    this.exportPngEvent.emit(null);
  }

  private exportJpg():void {
    this.exportJpgEvent.emit(null);
  }

  private exportWebp():void {
    this.exportWebpEvent.emit(null);
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
    new LocaleManager().changeLocale(this.localeData, new LocaleEnData());
  }

  private selectJa():void {
    new LocaleManager().changeLocale(this.localeData, new LocaleJaData());
  }

}
