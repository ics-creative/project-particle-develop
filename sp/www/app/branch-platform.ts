///<reference path="system.d.ts"/>

/**
 * プラットフォーム分岐用のコード
 */
System.config({
  packages: {
    app: {
      format: 'register',
      defaultExtension: 'js'
    }
  }
});

System.import('app/boot-mobile')
  .then(null, console.error.bind(console));

//System.import('app/boot')
//    .then(null, console.error.bind(console));
