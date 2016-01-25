import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {AfterViewInit} from "angular2/core";
import {DrawingData} from "../data/data-drawing";
import {PropertyPanel} from "./property.component";
import {DesktopIOBox} from "./desktop-io.component";
import {MobileIOBox} from "./mobile-io.component";
import {PropertyShapePanel} from "./property-shape.component";
import {MobilePropertyTemplateModal} from "./mobile-template.component";
import {StageComponent} from "./stage.component";
import {ViewChild} from "angular2/core";
import {ElementRef} from "angular2/core";
import {Viewport} from "../enum/view-port";
import {CanvasMargin} from "../enum/canvas-margin";
import {LocaleJaData} from "../i18n/locale-ja";
import {LocaleEnData} from "../i18n/locale-en";

"use strict";

@Component({
  selector: `my-app`,
  templateUrl: "app/components-html/app.html",
  directives: [
    StageComponent,
    PropertyPanel,
    DesktopIOBox,
    MobileIOBox,
    MobilePropertyTemplateModal
  ],
  providers: [LocaleData],
})

export class AppComponent implements AfterViewInit {
  protected drawingData:DrawingData;
  @ViewChild("stageComponent") stageComponent:StageComponent;
  @ViewChild("propertyPanel") propertyPanel:PropertyPanel;
  @ViewChild("desktopIOBox") desktopIOBox:DesktopIOBox;
  @ViewChild("mobileIOBox") mobileIOBox:MobileIOBox;
  @ViewChild("MobilePropertyTemplateModal") mobilePropertyTemplateModal:MobilePropertyTemplateModal;

  constructor(private localeData:LocaleData) {
    this.drawingData = new DrawingData();

    // ステージサイズに対して適当な値を適用する

    let canvasWidth:number = innerWidth;
    let canvasHeight:number = innerHeight;

    if (innerWidth > Viewport.sm) {
      canvasHeight -= CanvasMargin.TOP_DESKTOP;
      canvasWidth -= CanvasMargin.RIGHT_DESKTOP;
    }
    else {
      canvasHeight -= CanvasMargin.TOP_MOBILE;
      canvasWidth -= CanvasMargin.RIGHT_MOBILE;
    }

    let sw = Math.round(canvasWidth * 2 / 3);
    let sh = Math.round(canvasHeight * 2 / 3);
    this.drawingData.startX = Math.round(sw / 2);
    this.drawingData.startY = Math.round(sh / 2);
    this.drawingData.width = sw;
    this.drawingData.height = sh;

    let ja = new LocaleJaData();
    for (let key in ja) {
      if (Reflect.has(ja, key) == true) {
        let val = <any> ja[key];
        Reflect.set(localeData, key, val);
      }
    }
  }

  ngAfterViewInit() {

    this.adjustUi();

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://b.st-hatena.com/js/bookmark_button.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'hatena'));

    !function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, 'script', 'twitter-wjs');

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.5&appId=566926136738876";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  /**
   * UIの表示制御
   */
  protected adjustUi() {
  }

  protected handleSvgClick() {
    this.stageComponent.exportSvg().then(() => {
      this.openSvgExportWindow();
    });
  }

  protected handleJpgClick() {
    var dataUrl = this.stageComponent.toDataURL('image/jpeg', "1.0");
    window.open(dataUrl);
  }

  protected handlePngClick() {
    var dataUrl = this.stageComponent.toDataURL('image/png', null);
    window.open(dataUrl);
  }

  protected openSvgExportWindow() {
    window.open("data:image/svg+xml,\n" + encodeURIComponent(this.stageComponent.getParticleSvgString()));
  }

  protected handleExportParamaterClick() {
    window.open("data:text/plain;charset=UTF-8,\n" + encodeURIComponent(JSON.stringify(this.drawingData)));
  }
}