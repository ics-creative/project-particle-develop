import {LocaleData} from "./locale-data";
import {LocaleJaData} from "./locale-ja";
import {LocaleEnData} from "./locale-en";

"use strict";

export class LocaleManager {

  public applyClientLocale(localeData:LocaleData):void {
    let locale = this.checkLocale();
    let lData:LocaleData;

    switch (locale) {
      case "ja":
        lData = new LocaleJaData();
        break;
      case "en":
      default:
        lData = new LocaleEnData();
        break;
    }
    this.changeLocale(localeData, lData);
  }

  public checkLocale():string {
    var ua = window.navigator.userAgent.toLowerCase();
    try {
      // chrome
      if (ua.indexOf('chrome') != -1) {
        return ( navigator.languages[0] || navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0, 2);
      }
      // それ以外
      else {
        return ( navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0, 2);
      }
    }
    catch (e) {
      return undefined;
    }
  }


  public changeLocale(master:LocaleData, selectedLocale:LocaleData):void {
    for (let key in selectedLocale) {
      if (Reflect.has(selectedLocale, key) == true) {
        let val = <any> selectedLocale[key];
        Reflect.set(master, key, val);
      }
    }
  }
}

