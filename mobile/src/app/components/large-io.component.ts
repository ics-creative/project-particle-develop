import {Component, EventEmitter} from "angular2/core";
import {LocaleData} from "../i18n/locale-data";
import {LocaleEnData} from "../i18n/locale-en";
import {LocaleJaData} from "../i18n/locale-ja";
import {LocaleManager} from "../i18n/locale-manager";
import {PlatformData} from "../data/platform-data";

"use strict";

@Component({
  selector: "large-io-box",
  template: `<ul class="row hidden-sm-down">
  <li class="btn-group">
    <a href="#" class="dropdown-toggle btn btn-primary" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-file-image-o"></i>
      {{localeData.H_exportImage}}<span class="caret"></span></a>
    <div class="dropdown-menu dropdown-menu-right">
      <a class="dropdown-item" (click)="exportSvg()">SVG (Adobe Illustrator, etc.)</a>
      <a class="dropdown-item" (click)="exportPng()">PNG</a>
      <a class="dropdown-item" (click)="exportJpg()">JPEG</a>
      <a class="dropdown-item" (click)="exportWebp()">WebP (Only Chrome)</a>
    </div>
  </li>
  <li *ngIf="platformData.enableOutputParameter()"><a (click)="exportParameter()" class="btn btn-primary"><i class="fa fa-save"></i> {{localeData.H_exportParam}}</a></li>
  <li *ngIf="platformData.enableInputParameter()"><input #btnSelectFile (change)="selectParameterFile($event)" type="file"></li>
  <li class="btn-group">
    <a href="#" class="dropdown-toggle btn btn-primary" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-language"></i>
      {{localeData.H_language}}<span class="caret"></span></a>
    <ul class="dropdown-menu dropdown-menu-right">
      <li><a class="dropdown-item" (click)="selectEn()">English / 英語</a></li>
      <li><a class="dropdown-item" (click)="selectJa()">Japanese / 日本語</a></li>
    </ul>
  </li>

</ul>`,
  inputs: ["drawingData", "platformData"],
  events: [
    "exportSvgEvent",
    "exportPngEvent",
    "exportJpgEvent",
    "exportWebpEvent",
    "exportParameterEvent",
    "importParameterEvent"
  ]
})

export class LargeIOBox {
  private exportSvgEvent = new EventEmitter();
  private exportPngEvent = new EventEmitter();
  private exportJpgEvent = new EventEmitter();
  private exportWebpEvent = new EventEmitter();
  private exportParameterEvent = new EventEmitter();
  private importParameterEvent = new EventEmitter();

  private drawingData:particlejs.DrawingData;
  private platformData:PlatformData;
  public lastSelectFile:any;

  constructor(private localeData:LocaleData) {
  }

  private exportParameter():void {
    this.exportParameterEvent.emit(null);
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
    this.lastSelectFile = obj.target.files[0];

    this.importParameterEvent.emit(null);
  }

  private selectEn():void {
    new LocaleManager().changeLocale(this.localeData, new LocaleEnData());
  }

  private selectJa():void {
    new LocaleManager().changeLocale(this.localeData, new LocaleJaData());
  }

}
