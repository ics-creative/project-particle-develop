import {LocaleData} from "./locale-data";
import {LocaleJaData} from "./locale-ja";
export class LocaleManager {

  static applyClientLocale(localeData:LocaleData):void {
    LocaleManager.changeLocale(localeData, new LocaleJaData());
  }

  static changeLocale(master:LocaleData, selectedLocale:LocaleData):void {
    for (let key in selectedLocale) {
      if (Reflect.has(selectedLocale, key) == true) {
        let val = <any> selectedLocale[key];
        Reflect.set(master, key, val);
      }
    }
  }
}

