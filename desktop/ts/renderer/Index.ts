/// <reference path="../../../common/ts/common.d.ts" />
/// <reference path="../../../common/typings/tsd.d.ts" />
/// <reference path="../../typings/bundle.d.ts" />
/**
 * Created by nyamogera on 2015/12/29.
 */

interface JQuery {
    spectrum(value:any):void;
}

interface Window{
    jQuery:JQuery;
    $:JQuery;
}

class Index{
  constructor(){
  }

  public connect = () => {
    if( process.env.NODE_ENV === 'production' ){
      require('electron-connect').client.create();
    }
  }
}

const index = new Index();

window.jQuery = window.$ = require('./libs/jquery-2.1.1.min.js');

window.onload =  () => {

  index.connect();
  console.log("connect-test");

  var app = new App();
};