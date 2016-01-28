import {LocaleData} from "../i18n/locale-data";
"use strict";

import {AppComponent} from "./app.component";
import {PlatformData} from "../data/platform-data";
import {PlatformType} from "../enum/platform-type";

export class DesktopAppComponent extends AppComponent {

  constructor(localeData:LocaleData) {
    super(localeData);
  }

  getPlatformData() {
    return new PlatformData(PlatformType.Desktop);
  }

  protected handleSvgClick() {
    this.stageComponent.exportSvg().then(() => {
      this.openSvgExportWindow()
    });
  }

  protected handlePngClick() {
    let electron = require('electron');
    let dialog = electron.remote.dialog;

    let options = {
      title: 'PNGとして保存',
      defaultPath: 'particle.png',
      filters: [
        {name: 'Images', extensions: ['png']}
      ]
    };

    dialog.showSaveDialog(options, (filename:string) => {
      if (!filename) {
        return;
      }

      let dataUrl = this.stageComponent.toDataURL('image/png', null);
      // 「data:image/png;base64,」の文字列を置換して削除
      let data = dataUrl.replace(/^data:image\/png;base64,/, "");

      let fs = require('fs');

      fs.writeFile(filename, data, 'base64', function (error:Error) {
        if (error != null) {
          alert('error : ' + error);
        }
      });
    });
  }

  protected handleJpgClick() {
    let electron = require('electron');
    let dialog = electron.remote.dialog;

    let options = {
      title: 'JPEGとして保存',
      defaultPath: 'particle.jpg',
      filters: [
        {name: 'Images', extensions: ['jpeg']}
      ]
    };

    dialog.showSaveDialog(options, (filename:string) => {
      if (!filename) {
        return;
      }

      let dataUrl = this.stageComponent.toDataURL('image/jpeg', "0.9");
      // 「data:image/jpeg;base64,」の文字列を置換して削除
      let data = dataUrl.replace(/^data:image\/jpeg;base64,/, "");

      let fs = require('fs');

      fs.writeFile(filename, data, 'base64', function (error:Error) {
        if (error != null) {
          alert('error : ' + error);
        }
      });
    });
  }


  protected openSvgExportWindow() {

    let electron = require('electron');
    let dialog = electron.remote.dialog;

    let options = {
      title: 'SVGとして保存',
      defaultPath: 'particle.svg',
      filters: [
        {name: 'Images', extensions: ['svg']}
      ]
    };

    dialog.showSaveDialog(options, (filename:string) => {

      if (!filename) {
        return;
      }

      let fs = require('fs');

      fs.writeFile(filename, this.stageComponent.getParticleSvgString(), function (error:Error) {
        if (error != null) {
          alert('error : ' + error);
        }
      });
    });
  }

  protected handleExportParamaterClick() {
    let electron = require('electron');
    let dialog = electron.remote.dialog;

    let options = {
      title: 'パラメータを保存',
      defaultPath: 'particle.json',
      filters: [
        {name: 'Documents', extensions: ['json']}
      ]
    };

    dialog.showSaveDialog(options, (filename:string) => {
      if (!filename) {
        return;
      }
      let fs = require('fs');
      let data = JSON.stringify(this.drawingData);

      fs.writeFile(filename, data, function (error:Error) {
        if (error != null) {
          alert('error : ' + error);
        }
      });
    });
  }
}