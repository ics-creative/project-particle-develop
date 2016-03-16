import {bootstrap} from 'angular2/platform/browser'
import {MobileAppComponent} from './components/app-mobile.component';
import {LocaleData} from "./i18n/locale-data";
import {enableProdMode} from "angular2/core";

"use strict";

enableProdMode();
bootstrap(MobileAppComponent, [LocaleData]);
