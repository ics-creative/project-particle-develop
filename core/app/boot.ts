import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './components/app.component';
import {LocaleData} from "./i18n/locale-data";

"use strict";

bootstrap(AppComponent, [LocaleData]);