"use strict";

import {bootstrap} from 'angular2/platform/browser'
import {DesktopAppComponent} from './components/app-desktop.component';
import {LocaleData} from "./i18n/locale-data";

"use strict";

bootstrap(DesktopAppComponent, [LocaleData]);