"use strict";

import {Component} from "angular2/core";
@Component({
  selector: "input-range",
  template: `<label>{{label}}</label>
<div class="row">
  <div class="range col-xs-9">
    <input type="range"
           class="topcoat-range"
           min="{{min}}" max="{{max}}" step="{{step}}"
           [(ngModel)]="drawingData[targetProperty]"
           placeholder="targetProperty"
           (change)="handleChange($event)"/>
  </div>
  <div class="label col-xs-2">
    <input type="text"
           class="topcoat-text-input"
           placeholder="text"
           [(ngModel)]="drawingData[targetProperty]"
           (change)="handleChange($event)"/>
  </div>
</div>`,
  inputs: ["drawingData", "targetProperty", "label", "min", "max", "step"]
})
/**
 * Input タグ (range type)のコンポーネントです。
 * @author ICS-Ikeda
 * @since 2016-01-20
 */
export class InputRangeComponent {
  private drawingData:particlejs.DrawingData;
  /** 対象のプロパティー名を指定します。 */
  private targetProperty:string;
  /** ラベルの名称を指定します。 */
  private label:string;
  /** 最小値を指定します。 */
  private min:number;
  /** 最大値を指定します。 */
  private max:number;
  /** ラベル間の間隔を示す数値を指定します。 */
  private step:number;

  constructor() {
  }

  private handleChange(event:any):void{
    // なぜか string になっている可能性がある
    let tmp:any = <any>this.drawingData;
    const value:any = tmp[this.targetProperty];
    // そのため、明示的な型変換を行う
    tmp[this.targetProperty] = Number(value);
  }
}
