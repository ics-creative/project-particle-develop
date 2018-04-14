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
  selector: 'app-root',
  templateUrl: '../components-html/app.html',
  providers: [LocaleData]
})

export class AppComponent implements AfterViewInit {
  drawingData: particlejs.DrawingData;
  platformData: PlatformData;
  @ViewChild('stageComponent') stageComponent: StageComponent;
  @ViewChild('propetyModal') propetyModal: PropertyIoModalComponent;


  getPlatformData() {
    return new PlatformData(PlatformType.Browser);
  }

  constructor(public localeData: LocaleData) {
    this.drawingData = new particlejs.DrawingData();
    this.platformData = this.getPlatformData();

    // ステージサイズに対して適当な値を適用する

    let canvasWidth: number = innerWidth;
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
    this.drawingData.width = sw;
    this.drawingData.height = sh;

    new LocaleManager().applyClientLocale(localeData);
  }

  ngAfterViewInit() {
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
      js = <HTMLScriptElement>d.createElement(s);
      js.id = id;
      js.src = 'https://b.st-hatena.com/js/bookmark_button.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'hatena'));

    (function (d: any, s: string, id: string) {
      let js: HTMLScriptElement;
      const fjs = d.getElementsByTagName(s)[0];
      const p = /^http:/.test(d.location) ? 'http' : 'https';
      if (!d.getElementById(id)) {
        js = <HTMLScriptElement>d.createElement(s);
        js.id = id;
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
      js = <HTMLScriptElement>d.createElement(s);
      js.id = id;
      js.src = `//connect.facebook.net/${langLong}/sdk.js#xfbml=1&version=v2.5&appId=566926136738876`;
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  public handleSvgClick() {
    this.stageComponent.exportSvg().then(() => {
      this.openSvgExportWindow();
    });
  }

  private convertBlobFromBase64(base64: string, mimeType: string): Blob {
    const bin = atob(base64.replace(/^.*,/, ''));
    const buffer = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
      buffer[i] = bin.charCodeAt(i);
    }

    // Blobを作成
    const blob = new Blob([buffer.buffer], {
      type: mimeType,
    });
    return blob;
  }

  private saveFile(base64: string,
                   fileName: string,
                   mimeType: string): void {
    const blob = this.convertBlobFromBase64(base64, mimeType);

    if (window.navigator.msSaveBlob) {
      // for IE
      window.navigator.msSaveBlob(blob, fileName)
    } else if (window.URL && window.URL.createObjectURL) {
      // for Firefox, Chrome, Safari
      const a = document.createElement('a');
      a.download = fileName;
      a.href = window.URL.createObjectURL(blob);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      // for Other
      window.open(base64, '_blank');
    }
  }

  public handleJpgClick() {
    const dataUrl = this.stageComponent.toDataURL('image/jpeg', '1.0');

    this.saveFile(dataUrl, `particle_${Math.round(Date.now() / 1000)}.jpg`, 'image/jpeg');
  }

  public handlePngClick() {
    const dataUrl = this.stageComponent.toDataURL('image/png', null);

    this.saveFile(dataUrl, `particle_${Math.round(Date.now() / 1000)}.png`, 'image/png');
  }

  public handleWebpClick() {
    const dataUrl = this.stageComponent.toDataURL('image/webp', null);

    this.saveFile(dataUrl, `particle_${Math.round(Date.now() / 1000)}.webp`, 'image/webp');
  }

  public openSvgExportWindow() {
    const content = this.stageComponent.getParticleSvgString();

    const dataUrl = 'data:image/svg+xml,\n' + encodeURIComponent(content);

    const mimeType = 'text/plain';
    const fileName = `particle_${Math.round(Date.now() / 1000)}.svg`;

    // BOMは文字化け対策
    const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
    const blob = new Blob([bom, content], {type: mimeType});

    if (window.navigator.msSaveBlob) {
      // for IE
      window.navigator.msSaveBlob(blob, fileName)
    } else if (window.URL && window.URL.createObjectURL) {
      // for Firefox, Chrome, Safari
      const a = document.createElement('a');
      a.download = fileName;
      a.href = window.URL.createObjectURL(blob);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      // for Safari
      window.open(dataUrl, '_blank');
    }
  }

  public handleExportParameterClick() {
    const exportData = Object.assign({}, this.drawingData);
    exportData.VERSION = particlejs.VERSION;

    this.propetyModal.setIOButtonLink(JSON.stringify(exportData, null, '    '));
    this.propetyModal.openIOModal();
  }
}
