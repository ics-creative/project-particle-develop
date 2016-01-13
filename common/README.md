# cretejs-7-common

## Description
ICS Drawの共通部分

## Features


## Requirement
- [node.js v5.0以降](https://nodejs.org/en/)
- [gulp](http://gulpjs.com/)

## ファイル構成

```
.
├── README.md ── 現在読まれているファイルです。
├── package.json
│   └── npm用の管理ファイルです。
├── gulpfile.js
│   └── gulp用の管理ファイルです。
│
├── index.html
│   └── ルートHTMLファイルです。ファイルの変更時にコピーされてdistディレクトリへ配置されます。
├── libs
│   └── 外部ライブラリを配置しています。ファイルの変更時にコピーされてdistディレクトリへ配置されます。
├── styles
│   └── Sassファイルを配置します。
├── ts
│   └──  TypeScriptのコードを記載します。
├── tsconfig.json 
│   └── TypeScriptのコードをコンパイルする設定です。
├── tsd.json
│   └── typings/以下のファイルを管理するためのファイルです。（npm tsdのファイル）
├── typings
│   └── TypeScriptのd.tsファイルを保存するディレクトリです。(npm tsdのファイル）
│
└── dist ── 配布用ディレクトリ
    ├── css
    ├── index.html
    ├── index.js
    ├── index.js.map
    └── libs   
```

## Usage

1. common(現在のディレクトリ)へ移動する

1. 各モジュールのインストール
> npm install
> \#もし、ここでtypingsが作成されなかったら、```npm run install```コマンドを打ってください。 

1. 起動
    
    1.通常起動
    >npm run start

    2.browser-sync経由ででブラウザーの起動を行い、ファイルの変更時にビルドやブラウザの更新を行います。
    > npm run sync



## Installation
