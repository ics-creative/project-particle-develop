import {Component} from "angular2/core";
import {DrawingData} from "../data/drawing-data";

@Component({
  selector: "input-range",
  templateUrl: "app/components/template/input-range.html",
  inputs: ["drawingData", "targetProperty", "label", "min", "max", "step"]
})
/**
 * Input タグ (range type)のコンポーネントです。
 * @author ICS-Ikeda
 * @since 2016-01-20
 */
export class InputRangeComponent {
  private drawingData:DrawingData;
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

  handleChange() {
    console.log(this.targetProperty);
    console.log(this.drawingData[this.targetProperty]);
    console.log(this.drawingData);
  }
}
