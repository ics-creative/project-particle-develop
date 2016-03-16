/// <reference path="../../libs-typescript/particlejs.d.ts" />

import {Component} from "angular2/core";
import {AfterViewInit} from "angular2/core";
import {PropertyPanel} from "./property.component";
import {LargeIOBox} from "./large-io.component";
import {SmallIOBox} from "./small-io.component";
import {PropertyShapePanel} from "./property-shape.component";
import {SmallPropertyTemplateModal} from "./small-template.component";
import {StageComponent} from "./stage.component";
import {ViewChild} from "angular2/core";
import {ElementRef} from "angular2/core";
import {Viewport} from "../enum/view-port";
import {CanvasMargin} from "../enum/canvas-margin";
import {LocaleJaData} from "../i18n/locale-ja";
import {LocaleEnData} from "../i18n/locale-en";
import {LocaleData} from "../i18n/locale-data";
import {LocaleManager} from "../i18n/locale-manager";
import {PlatformData} from "../data/platform-data";
import {PlatformType} from "../enum/platform-type";
import {PropertyIoModal} from "./property-io.component";

"use strict";

@Component({
  selector: `my-app`,
  template: `<header class="container-fluid">
  <div class="row">
    <h1><img src="images/ui/logo.png"/></h1>

    <button class="hidden-sm-down btn btn-primary" data-toggle="modal" data-target="#modalAbout">
      {{localeData.H_about}}
    </button>
    <large-io-box class="large-io-box"
                  #largeIOBox [drawingData]="drawingData"
                  [platformData]="platformData"
                  (exportSvgEvent)="handleSvgClick()"
                  (exportPngEvent)="handlePngClick()"
                  (exportJpgEvent)="handleJpgClick()"
                  (exportWebpEvent)="handleWebpClick()"
                  (exportParameterEvent)="handleExportParameterClick()"
                  (importParameterEvent)="handleImportParameterClick()">
    </large-io-box>

    <small-io-box class="small-io-box"
                  [drawingData]="drawingData"
                  (exportPngEvent)="handlePngClick()"
                  (importCameraEvent)="handleCamera()">
    </small-io-box>
  </div>
</header>

<div id="wrapper" class="row">
  <div id="main">
    <div id="canvasBox" class="card card-primary text-xs-center">
      <header class="card-header hidden-sm-down">
        <h2 class="card-title">{{localeData.preview_head}}</h2>
      </header>
      <div class="card-block">
        <stage #stageComponent [drawingData]="drawingData"></stage>
      </div>
    </div>
  </div>
  <div id="propertyPanel" class="hidden-sm-down">
    <property-panel
      class="property-panel"
      [drawingData]="drawingData">
    </property-panel>
  </div>
</div>
<div class="modal fade" id="smallParticleTemplate" tabindex="-1" role="dialog" aria-labelledby="smallParticleTemplateLabel">
  <div class="modal-dialog" role="document">
    <small-particle-template-property-modal
      class="small-particle-template-property-modal"
      [drawingData]="drawingData">
    </small-particle-template-property-modal>
  </div>
</div>
<footer class="container-fluid">
  <div class="row">
    <a href="http://createjs.com" target="_blank" class="hidden-xs-down"><img src="images/ui/logo_createjs.svg" height="24" alt="Made with CreateJS"/></a>
    <a href="https://angular.io/" target="_blank" class="hidden-sm-down"><img src="images/ui/logo_angular2.png" height="24" alt="Made with Angular 2"/></a>
    <!--<a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>&nbsp;&nbsp;&nbsp;-->
    <!--<div class="fb-like" data-href="http://ics-web.jp/projects/particle-develop/" data-layout="button_count" data-action="like" data-show-faces="true" data-share="false"></div>-->
    &nbsp;&nbsp;&nbsp;
    <!--<a href="http://b.hatena.ne.jp/entry/" class="hatena-bookmark-button" data-hatena-bookmark-layout="simple-balloon" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->
    <a href="https://ics.media" target="_blank" class="logo-ics"><img src="images/ui/Copyright.png" height="24" alt="Created By ICS INC."/></a>
  </div>
</footer>

<!-- Modal -->
<div class="modal fade" id="modalAbout" tabindex="-1" role="dialog" aria-labelledby="modalAboutLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-xs-center">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">{{localeData.MA_head}}</h4>
      </div>
      <div class="modal-body">
        <p>{{localeData.MA_sentence}}</p>
        <hr>
        <figure>
          <img src="images/ui/about.png" style="width:100%;"/>
        </figure>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<property-io-box #propetyModal class="property-io-box"></property-io-box>
`,
  directives: [
    StageComponent,
    PropertyPanel,
    LargeIOBox,
    SmallIOBox,
    SmallPropertyTemplateModal,
    PropertyIoModal
  ],
  providers: [LocaleData],
})

export class AppComponent implements AfterViewInit {
  protected drawingData:particlejs.DrawingData;
  protected platformData:PlatformData;
  @ViewChild("stageComponent") stageComponent:StageComponent;
  @ViewChild("propertyPanel") propertyPanel:PropertyPanel;
  @ViewChild("smallIOBox") smallIOBox:SmallIOBox;
  @ViewChild("largeIOBox") largeIOBox:LargeIOBox;
  @ViewChild("smallPropertyTemplateModal") smallPropertyTemplateModal:SmallPropertyTemplateModal;
  @ViewChild("propetyModal") propetyModal:PropertyIoModal;


  getPlatformData() {
    return new PlatformData(PlatformType.Browser);
  }

  constructor(private localeData:LocaleData) {
    this.drawingData = new particlejs.DrawingData();
    this.platformData = this.getPlatformData();

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

    new LocaleManager().applyClientLocale(localeData);
  }

  ngAfterViewInit() {

    this.adjustUi();


    let lang = new LocaleManager().checkLocale();

    if (lang != "ja") {
      document.title = "Particle Develop - HTML5 Vector Design Tool - ICS";
    }

    this.setupWidgets(lang);
  }

  protected setupWidgets(lang:string) {
    let langLong = lang == "ja" ? "ja_JP" : "en_EN";

    (function (d:Document, s:string, id:string) {
      var js:HTMLScriptElement, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = <HTMLScriptElement>d.createElement(s);
      js.id = id;
      js.src = "https://b.st-hatena.com/js/bookmark_button.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'hatena'));

    !function (d:Document, s:string, id:string) {
      var js:HTMLScriptElement, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
      if (!d.getElementById(id)) {
        js = <HTMLScriptElement>d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, 'script', 'twitter-wjs');

    (function (d:Document, s:string, id:string) {
      var js:HTMLScriptElement, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = <HTMLScriptElement>d.createElement(s);
      js.id = id;
      js.src = `//connect.facebook.net/${langLong}/sdk.js#xfbml=1&version=v2.5&appId=566926136738876`;
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

  protected handleWebpClick() {
    var dataUrl = this.stageComponent.toDataURL('image/webp', null);
    window.open(dataUrl);
  }

  protected openSvgExportWindow() {
    window.open("data:image/svg+xml,\n" + encodeURIComponent(this.stageComponent.getParticleSvgString()));
  }

  protected handleExportParameterClick() {

    var exportData = Object.assign({}, this.drawingData);
    exportData.VERSION = particlejs.VERSION;

    this.propetyModal.setIOButtonLink(JSON.stringify(exportData, null, "    "));
    this.propetyModal.openIOModal();

    //window.open("data:text/plain;charset=UTF-8,\n" + encodeURIComponent(JSON.stringify(this.drawingData)));
  }

  protected handleImportParameterClick() {

    let file = this.largeIOBox.lastSelectFile
    // ファイルの内容は FileReader で読み込みます.
    let fileReader = new FileReader();
    fileReader.onload = (event) => {
      // event.target.result に読み込んだファイルの内容が入っています。
      var json = (<FileReader>event.target).result;
      let object = JSON.parse(json);

      this.drawingData.importData(object);
    };
    fileReader.readAsText(file);

  }
}