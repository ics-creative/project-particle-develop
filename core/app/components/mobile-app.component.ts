import {AppComponent} from "./app.component";
export class MobileAppComponent extends AppComponent {
  handleSVGClick() {
    alert("モバイルアプリでは使用不可能です");
  }

  handlePNGClick() {
    this.stageComponent.runExportSP().then(function () {
    });
  }

  handleCamera() {
    this.stageComponent.runCamera().then(function () {
    });
  }

  handleExportParamaterClick() {
    alert("paramater!");
    console.log("handleExportParamaterClick");
  }
}