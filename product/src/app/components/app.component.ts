import {PropertyPanelComponent} from './property.component';
import {LargeIoBoxComponent} from './large-io.component';
import {SmallIoBoxComponent} from './small-io.component';
import {SmallPropertyTemplateModalComponent} from './small-template.component';
import {StageComponent} from './stage.component';
import {Viewport} from '../enum/view-port';
import {CanvasMargin} from '../enum/canvas-margin';
import {LocaleData} from '../i18n/locale-data';
import {LocaleManager} from '../i18n/locale-manager';
import {PlatformData} from '../data/platform-data';
import {PlatformType} from '../enum/platform-type';
import {PropertyIoModalComponent} from './property-io.component';

import {AfterViewInit, Component, ViewChild} from '@angular/core';

@Component({
  selector   : 'app-root',
  templateUrl: '../components-html/app.html',
  providers  : [LocaleData]
})

export class AppComponent implements AfterViewInit {
  protected drawingData: particlejs.DrawingData;
  protected platformData: PlatformData;
  @ViewChild('stageComponent') stageComponent: StageComponent;
  @ViewChild('propertyPanel') propertyPanel: PropertyPanelComponent;
  @ViewChild('smallIOBox') smallIOBox: SmallIoBoxComponent;
  @ViewChild('largeIOBox') largeIOBox: LargeIoBoxComponent;
  @ViewChild('smallPropertyTemplateModal') smallPropertyTemplateModal: SmallPropertyTemplateModalComponent;
  @ViewChild('propetyModal') propetyModal: PropertyIoModalComponent;


  getPlatformData() {
    return new PlatformData(PlatformType.Browser);
  }

  constructor(private localeData: LocaleData) {
    this.drawingData  = new particlejs.DrawingData();
    this.platformData = this.getPlatformData();

    // ステージサイズに対して適当な値を適用する

    let canvasWidth: number  = innerWidth;
    let canvasHeight: number = innerHeight;

    if (innerWidth > Viewport.sm) {
      canvasHeight -= CanvasMargin.TOP_DESKTOP;
      canvasWidth -= CanvasMargin.RIGHT_DESKTOP;
    } else {
      canvasHeight -= CanvasMargin.TOP_MOBILE;
      canvasWidth -= CanvasMargin.RIGHT_MOBILE;
    }

    const sw = Math.round(canvasWidth * 2 / 3);
    const sh = Math.round(canvasHeight * 2 / 3);

    this.drawingData.startX = Math.round(sw / 2);
    this.drawingData.startY = Math.round(sh / 2);
    this.drawingData.width  = sw;
    this.drawingData.height = sh;

    new LocaleManager().applyClientLocale(localeData);
  }

  ngAfterViewInit() {

    this.adjustUi();


    const lang = new LocaleManager().checkLocale();

    if (lang !== 'ja') {
      document.title = 'Particle Develop - HTML5 Vector Design Tool - ICS';
    }

    this.setupWidgets(lang);
  }

  protected setupWidgets(lang: string) {
    const langLong = lang === 'ja' ? 'ja_JP' : 'en_EN';

    (function (d: Document, s: string, id: string) {
      let js: HTMLScriptElement;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js     = <HTMLScriptElement>d.createElement(s);
      js.id  = id;
      js.src = 'https://b.st-hatena.com/js/bookmark_button.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'hatena'));

    (function (d: any, s: string, id: string) {
      let js: HTMLScriptElement;
      const fjs = d.getElementsByTagName(s)[0];
      const p   = /^http:/.test(d.location) ? 'http' : 'https';
      if (!d.getElementById(id)) {
        js     = <HTMLScriptElement>d.createElement(s);
        js.id  = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, 'script', 'twitter-wjs'));

    (function (d: Document, s: string, id: string) {
      let js: HTMLScriptElement;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js     = <HTMLScriptElement>d.createElement(s);
      js.id  = id;
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
    const dataUrl = this.stageComponent.toDataURL('image/jpeg', '1.0');
    window.open(dataUrl);
  }

  protected handlePngClick() {
    const dataUrl = this.stageComponent.toDataURL('image/png', null);
    window.open(dataUrl);
  }

  protected handleWebpClick() {
    const dataUrl = this.stageComponent.toDataURL('image/webp', null);
    window.open(dataUrl);
  }

  protected openSvgExportWindow() {
    window.open('data:image/svg+xml,\n' + encodeURIComponent(this.stageComponent.getParticleSvgString()));
  }

  protected handleExportParameterClick() {

    const exportData   = Object.assign({}, this.drawingData);
    exportData.VERSION = particlejs.VERSION;

    this.propetyModal.setIOButtonLink(JSON.stringify(exportData, null, '    '));
    this.propetyModal.openIOModal();

// window.open('data:text/plain;charset=UTF-8,\n' + encodeURIComponent(JSON.stringify(this.drawingData)));
  }

  protected handleImportParameterClick() {

    const file = this.largeIOBox.lastSelectFile;

    // ファイルの内容は FileReader で読み込みます.
    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      // event.target.result に読み込んだファイルの内容が入っています。
      const json   = (<FileReader>event.target).result;
      const object = JSON.parse(json);

      this.drawingData.importData(object);
    };
    fileReader.readAsText(file);

  }
}
