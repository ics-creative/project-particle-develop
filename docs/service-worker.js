// -------------------------------
// ワークボックスを使ってキャッシュ戦略を定義
//
//
// ■キャッシュのレベルは次の指定が可能
// 1. NetworkOnly: ネットワークからのみ返す
// 2. NetworkFirst: ネットワークから優先して返すが、ネットワークから取得に失敗した場合はキャッシュから返す
// 3. CacheFirst: キャッシュから優先して返すが、キャッシュになければネットワークから返す
// 4. CacheOnly: キャッシュからのみ返す
// 5. staleWhileRevalidate: まずキャッシュから優先して返すが、次回アクセス時に備えてバックグラウンドでネットワークから更新をフェッチしてキャッシュを更新しておく
// -------------------------------

// Googleのワークボックスを読み込む
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

workbox.setConfig({
  debug: true
});

workbox.routing.registerRoute(
  new RegExp('(.*)'),
  // ネットワーク通信を優先
  workbox.strategies.networkFirst()
);

// JSとCSSのキャッシュ戦略
workbox.routing.registerRoute(
  new RegExp('^https://fonts.googleapis.com/(.*)'),
  // キャッシュを優先
  workbox.strategies.cacheFirst()
);

