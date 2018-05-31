import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// BootstrapのJavaScript側の機能を読み込む
import 'bootstrap';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

{
  // Webフォントをあとから読み込む
  const d = document;
  const element = d.createElement('link');
  element.setAttribute('rel', 'stylesheet');
  element.setAttribute('src', 'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css');
  document.head.appendChild(element);
}

// サービスワーカーを起動する
{
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js');
  }
}

{
  document.documentElement.addEventListener('touchstart',
    (e) => {
      if (e.touches.length >= 2) {
        e.preventDefault();
      }
    }, {passive: false});

  /* ダブルタップによる拡大を禁止 */
  let t = 0;
  document.documentElement.addEventListener('touchend', (e) => {
    const now = new Date().getTime();
    if ((now - t) < 350) {
      e.preventDefault();
    }
    t = now;
  });
}
