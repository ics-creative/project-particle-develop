"use strict";

import {AppComponent} from "./app.component";

export class DesktopAppComponent extends AppComponent {

  protected handleSVGClick() {
    this.stageComponent.exportSVG().then(() => {
      this.openSVGExportWindow()
    });
  }

  protected handlePNGClick() {
    let electron = require('electron');
    let dialog = electron.remote.dialog;

    let options = {
      title: 'PNGとして保存',
      defaultPath: 'particle.png',
      filters: [
        {name: 'Images', extensions: ['png']}
      ]
    };

    dialog.showSaveDialog(options, (filename) => {
      if (!filename) {
        return;
      }

      let dataUrl = this.stageComponent.toDataURL('image/png', null);
      // 「data:image/png;base64,」の文字列を置換して削除
      let data = dataUrl.replace(/^data:image\/png;base64,/, "");

      let fs = require('fs');

      fs.writeFile(filename, data, 'base64', function (error) {
        if (error != null) {
          alert('error : ' + error);
        }
      });
    });
  }

  protected handleJPEGClick() {
    let electron = require('electron');
    let dialog = electron.remote.dialog;

    let options = {
      title: 'JPEGとして保存',
      defaultPath: 'particle.jpg',
      filters: [
        {name: 'Images', extensions: ['jpeg']}
      ]
    };

    dialog.showSaveDialog(options, (filename) => {
      if (!filename) {
        return;
      }

      let dataUrl = this.stageComponent.toDataURL('image/jpeg', "0.9");
      // 「data:image/jpeg;base64,」の文字列を置換して削除
      let data = dataUrl.replace(/^data:image\/jpeg;base64,/, "");

      let fs = require('fs');

      fs.writeFile(filename, data, 'base64', function (error) {
        if (error != null) {
          alert('error : ' + error);
        }
      });
    });
  }


  protected openSVGExportWindow() {

    let electron = require('electron');
    let dialog = electron.remote.dialog;

    let options = {
      title: 'SVGとして保存',
      defaultPath: 'particle.svg',
      filters: [
        {name: 'Images', extensions: ['svg']}
      ]
    };

    dialog.showSaveDialog(options, (filename) => {

      if (!filename) {
        return;
      }

      let fs = require('fs');

      fs.writeFile(filename, this.stageComponent.getParticleSVGString(), function (error) {
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

    dialog.showSaveDialog(options, (filename) => {
      if (!filename) {
        return;
      }
      let fs = require('fs');
      let data = JSON.stringify(this.drawingData);

      fs.writeFile(filename, data, function (error) {
        if (error != null) {
          alert('error : ' + error);
        }
      });
    });
  }
}