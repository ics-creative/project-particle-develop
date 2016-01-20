import {Component} from "angular2/core";
import {DrawingData} from "../data/drawing-data";

@Component({
  selector: "input-range",
  templateUrl: "app/components/template/input-range.html",
  inputs: ["drawingData", "targetProperty"]
})

export class InputRangeComponent {
  private drawingData:DrawingData;
  private targetProperty:string;

  constructor() {
  }

  handleChange(){
    console.log(this.targetProperty);
    console.log(this.drawingData[this.targetProperty]);
    console.log(this.drawingData);
  }
}
