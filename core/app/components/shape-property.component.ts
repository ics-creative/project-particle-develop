import {Component} from "../../node_modules/angular2/core.d";
import {DrawingData} from "./../data/drawing-data";
import {EventEmitter} from '../../node_modules/angular2/core.d';

const template = `
<div class="modal fade" id="ShapeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
          aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Shapes</h4>
      </div>
      <div class="modal-body">

        <div class="col-sm-3" (click)="selectShape('star')">
          ☆
        </div>
        <div class="col-sm-3" (click)="selectShape('heart')">
          ♡
        </div>
        <div class="col-sm-3"(click)="selectShape('mail-face')">
          〠
        </div>
        <div class="col-sm-3" (click)="selectShape('mail-mark')">
          〒
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" (click)="saveChanges()" data-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
`;
@Component({
  selector: "shape-property-modal",
  template: template,
  inputs: ["drawingData"]
})

export class ShapePropertyModal {
  private drawingData:DrawingData;
  private temporarySelect:string;

  selectShape = (shapeId) => {
    console.log(`selectapp:${shapeId}`);
    //  ラジオボタンとかにすればテンポラリ選択不要そう
    this.temporarySelect = shapeId;
  }

  saveChanges = () => {
    // TODO:配列で選択できるようにする
    this.drawingData.shapeIdList = [this.temporarySelect];
  }

  constructor() {
  }
}
