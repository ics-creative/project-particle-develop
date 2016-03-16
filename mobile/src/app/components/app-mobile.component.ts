import {PlatformType} from "../enum/platform-type";
import {PlatformData} from "../data/platform-data";
import {AppComponent} from "./app.component";
import {LocaleData} from "../i18n/locale-data";

"use strict";

export class MobileAppComponent extends AppComponent {

  constructor(private localeData:LocaleData) {
    super(localeData);
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
}