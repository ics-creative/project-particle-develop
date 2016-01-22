"use strict";
import {AppComponent} from "./app.component";
export class MobileAppComponent extends AppComponent {
  protected handleSVGClick() {
    alert("モバイルアプリでは使用不可能です");
  }

  protected handlePNGClick() {
    this.stageComponent.runExportSP().then();
  }

  protected handleCamera() {
    this.stageComponent.runCamera().then();
  }

  handleExportParamaterClick() {
    alert("モバイルアプリでは使用不可能です");
  }
}