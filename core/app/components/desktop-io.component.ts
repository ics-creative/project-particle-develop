"use strict";

import {Component} from "angular2/core";
import {DrawingData} from "../data/data-drawing";
import {EventEmitter} from 'angular2/core';
import {ElementRef} from "angular2/core";

@Component({
  selector: "desktop-io-box",
  templateUrl: "app/components/template/desktop-io-box.html",
  inputs: ["drawingData"],
  events: [
    "exportSvgEvent",
    "exportPngEvent",
    "exportJpgEvent",
    "exportParamaterEvent"
  ]
})

export class DesktopIOBox {
  private exportSvgEvent = new EventEmitter();
  private exportPngEvent = new EventEmitter();
  private exportJpgEvent = new EventEmitter();
  private exportParamaterEvent = new EventEmitter();

  private drawingData:DrawingData;
  private element:ElementRef;

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

  constructor(element:ElementRef) {
    this.element = element;
    this.setDragAndDropSettings(element);
  }

  private setDragAndDropSettings(element:ElementRef):void {
    /** documentにドラッグされた場合 / ドロップされた場合 */
    document.ondragover = document.ondrop = function (e:Event) {
      e.preventDefault(); // イベントの伝搬を止めて、アプリケーションのHTMLとファイルが差し替わらないようにする
      return false;
    };

    let holder = element.nativeElement;
    /** hoverエリアにドラッグされた場合 */
    holder.ondragover = function () {
      return false;
    };
    /** hoverエリアから外れた or ドラッグが終了した */
    holder.ondragleave = holder.ondragend = function () {
      return false;
    };
    /** hoverエリアにドロップされた */
    holder.ondrop = this.onDrop;
  }

  private onDrop(event:any) {
    event.preventDefault(); // イベントの伝搬を止めて、アプリケーションのHTMLとファイルが差し替わらないようにする

    let file = event.dataTransfer.files[0];
    this.importParameterFile(file);

    return false;
  }

}
