/**
 * Created by nyamogera on 2016/01/17.
 */
import {AppComponent} from "./app.component";


export class DesktopAppComponent extends AppComponent {

  handleSVGClick() {
    this.stageComponent.exportSVG().then(this.openSVGExportWindow);
  }

  openSVGExportWindow = () => {

    const electron = require('electron');
    var dialog = electron.remote.dialog;

    var options = {
      title: 'Save Dialog Example',
      filters: [
        {name: 'Images', extensions: ['svg']}
      ]
    };

    dialog.showSaveDialog(options, (filename) => {
      var fs = require('fs');

      fs.writeFile(filename, this.stageComponent.getParticleSVGString(), function (error) {
        if (error != null) {
          alert('error : ' + error);
        }
      });

    });

  }

  handleExportParamaterClick() {
    alert("paramater!");
    console.log("handleExportParamaterClick");
  }
}