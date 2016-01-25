import {Injectable} from 'angular2/core';

"use strict";

@Injectable()
export class LocaleData {
  preview_head:string;
  settings_head:string;

  say(){
    return this.preview_head;
  }
}