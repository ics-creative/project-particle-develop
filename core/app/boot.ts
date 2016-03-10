import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './components/app.component';
import {LocaleData} from "./i18n/locale-data";
import {enableProdMode} from "angular2/core";

"use strict";

enableProdMode();
bootstrap(AppComponent, [LocaleData]);