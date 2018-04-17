import {Component, Input} from '@angular/core';
import {DrawingData} from 'particlejs';
@Component({
  selector   : 'app-input-range',
  styles     : [`
      input[type=range] {
        display: block;
        width: 100%;
      }
      .row {
        padding-left: 0;
        padding-right: 0;
        justify-content: space-between;
      }
      [class*="col"] {
        padding-right: 0;
        padding-left: 0;
      }
  `],
  templateUrl: './input-range.component.html'
})
/**
 * Input タグ (range type)のコンポーネントです。
 * @author ICS-Ikeda
 * @since 2016-01-20
 */
export class InputRangeComponent {
  @Input() public drawingData: DrawingData;

  /** 対象のプロパティー名を指定します。 */
  @Input() public targetProperty: string;

  /** ラベルの名称を指定します。 */
  @Input() public label: string;

  /** 最小値を指定します。 */
  @Input() public min: number;

  /** 最大値を指定します。 */
  @Input() public max: number;

  /** ラベル間の間隔を示す数値を指定します。 */
  @Input() public step: number;

  constructor() {
  }

  public handleChange(event: any): void {
    // なぜか string になっている可能性がある
    const tmp: any   = <any>this.drawingData;
    const value: any = tmp[this.targetProperty];

    // そのため、明示的な型変換を行う
    tmp[this.targetProperty] = Number(value);
  }
}
