"use strict";
import {AppComponent} from "./app.component";
export class MobileAppComponent extends AppComponent {
  protected handleSvgClick() {
    alert("モバイルアプリでは使用不可能です");
  }

  getPlatformData() {
    return new PlatformData(PlatformType.Mobile);
  }

  protected handlePngClick() {
    this.stageComponent.runExportSP().then();
  }

  protected handleCamera() {
    this.stageComponent.runCamera().then();
  }

  handleExportParamaterClick() {
    alert("モバイルアプリでは使用不可能です");
  }
}