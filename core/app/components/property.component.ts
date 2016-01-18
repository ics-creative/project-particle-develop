import {Component} from "angular2/core";
import {DrawingData} from "../data/drawing-data";
import {EventEmitter} from 'angular2/core';
import {ElementRef} from "angular2/core";

const template = `
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Canvas Settings</h3>
  </div>
  <div class="panel-body">
    <div class="row">
      <div class="col-xs-6">
        width <input type="range" class="topcoat-range" min="0" max="500" step="1" [(ngModel)]="drawingData.width" placeholder="width"/>
        {{drawingData.width}}
        height <input type="range" min="0" max="500" step="1" [(ngModel)]="drawingData.height" placeholder="height"/>
        {{drawingData.height}}
        <hr>
        <input type="color" [(ngModel)]="drawingData.bgColor" placeholder="bgColor" value="{{drawingData.bgColor}}"/>
        {{drawingData.bgColor}}


        <hr>
        <input type="color" [(ngModel)]="drawingData.startColor" placeholder="startColor" value="{{drawingData.startColor}}"/>
        {{drawingData.startColor}}
        <hr>
        x-value
        <input type="range" class="topcoat-range" min="0" max="500" step="1" [(ngModel)]="drawingData.startX" placeholder="startX"/>
        {{drawingData.startX}}
        <input type="range" class="topcoat-range" min="0" max="500" step="1" [(ngModel)]="drawingData.startXVariance"
               placeholder="startXVariance"/>
        {{drawingData.startXVariance}}

        <hr>
        y-value
        <input type="range" class="topcoat-range" min="0" max="500" step="1" [(ngModel)]="drawingData.startY" placeholder="startY"/>
        {{drawingData.startY}}
        <input type="range" class="topcoat-range" min="0" max="500" step="1" [(ngModel)]="drawingData.startYVariance"
               placeholder="startYVariance"/>
        {{drawingData.startYVariance}}


        <hr>
        initial speed
        <input type="range" class="topcoat-range" min="0" max="20" step="0.1" [(ngModel)]="drawingData.initialSpeed" placeholder="initialSpeed"/>
        {{drawingData.initialSpeed}}
        <input type="range" class="topcoat-range" min="0" max="20" step="0.1" [(ngModel)]="drawingData.initialSpeedVariance"
               placeholder="initialSpeedVariance"/>
        {{drawingData.initialSpeedVariance}}
        <hr>

        start-direction(angle)
        <input type="range" class="topcoat-range" min="0" max="360" step="0.1" [(ngModel)]="drawingData.initialDirection" placeholder="initialDirection"/>
        {{drawingData.initialDirection}}
        <input type="range" class="topcoat-range" min="0" max="360" step="0.1" [(ngModel)]="drawingData.initialDirectionVariance"
               placeholder="initialDirectionVariance"/>
        {{drawingData.initialDirectionVariance}}


        <hr>
        friction
        <input type="range" class="topcoat-range" min="0" max="0.5" step="0.001" [(ngModel)]="drawingData.friction" placeholder="friction"/>
        {{drawingData.friction}}


        <hr>
        acceleration speed
        <input type="range" class="topcoat-range" min="0" max="20" step="0.1" [(ngModel)]="drawingData.accelerationSpeed" placeholder="accelerationSpeed"/>
        {{drawingData.accelerationSpeed}}

        acceleration direction
        <input type="range" class="topcoat-range" min="0" max="360" step="0.1" [(ngModel)]="drawingData.accelerationDirection" placeholder="accelerationDirection"/>
        {{drawingData.accelerationDirection}}
        <hr>

      </div>
      <div class="col-xs-6">
        <hr>
        start-alpha
        <input type="range" class="topcoat-range" min="0" max="1" step="0.01" [(ngModel)]="drawingData.startAlpha" placeholder="startAlpha"/>
        {{drawingData.startAlpha}}
        <input type="range" class="topcoat-range" min="0" max="1" step="0.01" [(ngModel)]="drawingData.startAlphaVariance"
               placeholder="startAlphaVariance"/>
        {{drawingData.startAlphaVariance}}

        <hr>
        finish-alpha
        <input type="range" class="topcoat-range" min="0" max="1" step="0.01" [(ngModel)]="drawingData.finishAlpha"
               placeholder="finishAlpha"/>
        {{drawingData.finishAlpha}}
        <input type="range" class="topcoat-range" min="0" max="1" step="0.01" [(ngModel)]="drawingData.finishAlphaVariance"
               placeholder="finishAlphaVariance"/>
        {{drawingData.finishAlphaVariance}}


        <hr>
        start-scale
        <input type="range" class="topcoat-range" min="0" max="5" step="0.01" [(ngModel)]="drawingData.startScale" placeholder="startScale"/>
        {{drawingData.startScale}}
        <input type="range" class="topcoat-range" min="0" max="5" step="0.01" [(ngModel)]="drawingData.startScaleVariance"
               placeholder="startScaleVariance"/>
        {{drawingData.startScaleVariance}}

        <hr>
        finish-scale
        <input type="range" class="topcoat-range" min="0" max="5" step="0.01" [(ngModel)]="drawingData.finishScale"
               placeholder="finishScale"/>
        {{drawingData.finishScale}}
        <input type="range" class="topcoat-range" min="0" max="5" step="0.01" [(ngModel)]="drawingData.finishScaleVariance"
               placeholder="finishScaleVariance"/>
        {{drawingData.finishScaleVariance}}



        <hr>
        emit frequency
        <input type="range" class="topcoat-range" min="0" max="20" step="1" [(ngModel)]="drawingData.emitFrequency"
               placeholder="emitFrequency"/>
        {{drawingData.emitFrequency}}
         <hr>
        life span
        <input type="range" class="topcoat-range" min="10" max="500" step="0.01" [(ngModel)]="drawingData.lifeSpan" placeholder="lifeSpan"/>
        {{drawingData.lifeSpan}}
        <input type="range" class="topcoat-range" min="0" max="500" step="0.01" [(ngModel)]="drawingData.lifeSpanVariance"
               placeholder="lifeSpanVariance"/>
        {{drawingData.lifeSpanVariance}}
        <div>
          <a href="#" class="btn btn-info btn-lg btn-block" data-toggle="modal" data-target="#ShapeModal">Shapes</a>
        </div>
      </div>
    </div>
    <button class="btn btn-primary btn-lg btn-block hidden-xs" (click)="exportSVG()">SVG保存</button>
    <button class="btn btn-primary btn-lg btn-block hidden-xs" (click)="exportParamater()">パラメータ保存</button>
    <input  #btnSelectFile  class="btn btn-primary btn-lg btn-block hidden-xs" (change)="selectParameterFile($event)" type="file"/>
  </div>
</div>
`;

@Component({
  selector: "property-panel",
  template: template,
  inputs: ["drawingData"],
  events: [
    "exportSVGEvent",
    "exportParamaterEvent"
  ]
})

export class PropertyPanel {
  private exportSVGEvent = new EventEmitter();
  private exportParamaterEvent = new EventEmitter();

  private drawingData:DrawingData;
  private element:ElementRef;

  exportParamater() {
    this.exportParamaterEvent.emit(null);
  }

  exportSVG() {
    this.exportSVGEvent.emit(null);
  }

  selectParameterFile(obj:any){
    this.importParameterFile(obj.target.files[0])
  }

  importParameterFile(file:any) {

    alert(file);
    // ファイルの内容は FileReader で読み込みます.
    var fileReader = new FileReader();
    fileReader.onload = (event) => {
      // event.target.result に読み込んだファイルの内容が入っています。
      var json = event.target.result;
      let object = JSON.parse(json);

      this.drawingData.into(object);
    }
    fileReader.readAsText(file);
  }

  constructor(element:ElementRef) {
    this.element = element;
    this.setDragAndDropSettings(element);
  }

  setDragAndDropSettings(element:ElementRef) {
    /** documentにドラッグされた場合 / ドロップされた場合 */
    document.ondragover = document.ondrop = function (e) {
      e.preventDefault(); // イベントの伝搬を止めて、アプリケーションのHTMLとファイルが差し替わらないようにする
      return false;
    };

    var holder = element.nativeElement;
    /** hoverエリアにドラッグされた場合 */
    holder.ondragover = function () {
      return false;
    };
    /** hoverエリアから外れた or ドラッグが終了した */
    holder.ondragleave = holder.ondragend = function () {
      return false;
    };
    /** hoverエリアにドロップされた */
    holder.ondrop = this.onDrop;
  }

  onDrop = (e) => {
    e.preventDefault(); // イベントの伝搬を止めて、アプリケーションのHTMLとファイルが差し替わらないようにする

    var file = e.dataTransfer.files[0];
    this.importParameterFile(file);

    return false;
  };

}
