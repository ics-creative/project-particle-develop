import {PlatformType} from "../enum/platform-type";
import {PlatformData} from "../data/platform-data";
import {AppComponent} from "./app.component";

"use strict";

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

  handleExportParameterClick() {
    alert("モバイルアプリでは使用不可能です");
  }
}