# Particle Develop

![Particle Develop](https://ics.media/wp-content/uploads/2016/01/160125_particle_develop.png)

## Description

Particle DevelopはHTML5製のデザインツールです。雪や炎、キラキラなどのパーティクル表現を作成でき、ベクター画像として保存することができます。Adobe Illustratorのイラスト制作にも役立ちます。



- [core 共通ソースフォルダ](core/)
- [desktop デスクトップ用のソースフォルダ](desktop/)
- [sp モバイル用のソースフォルダ](sp/)

## インストールする必要のあるもの

### CSS の編集のために

```
# SASS のインストール
sudo gem install sass

# COMPASS のインストール
sudo gem install compass

# CSS フレームワーク「Bootstrap」のインストール
sudo gem install bootstrap-sass
```

### TypeScript の編集のために

tsd ( https://github.com/DefinitelyTyped/tsd )にて「d.ts」ファイルを管理しています。
coreディレクトリ上で、```npm install```コマンド実行後に「typings」ディレクトリが作成されなかった場合は、必要ファイルのインストールに失敗してるので以下のコマンドを実行してください。

```
# tsd.json ファイル内に記述されたファイルをインストール
node_modules/.bin/tsd install
```