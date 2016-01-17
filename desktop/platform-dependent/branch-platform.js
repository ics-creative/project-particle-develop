/**
 * プラットフォーム分岐用のコード
 */

if (process.env.NODE_ENV === 'production') {
    require('electron-connect').client.create();
}

System.config({
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js'
        }
    }
});
System.import('app/boot-desktop')
    .then(null, console.error.bind(console));
