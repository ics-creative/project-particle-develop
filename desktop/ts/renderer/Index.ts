/// <reference path="../../../common/ts/common.d.ts" />
/// <reference path="../../typings/bundle.d.ts" />
/**
 * Created by nyamogera on 2015/12/29.
 */

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
window.addEventListener("load", (e) => {
  index.connect();
  console.log("connect-test");
});