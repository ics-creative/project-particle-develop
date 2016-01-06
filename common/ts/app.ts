/**
 * Created by nyamogera on 2015/12/29.
 */

class App{
  public stage:createjs.Stage;
  private drawingLayer:DrawingLayer;

  constructor(){

    var canvas = <HTMLCanvasElement>document.getElementById("canvas_drawing");

    canvas.width = 1024;
    canvas.height = 512;

    // Stageオブジェクトを作成します
    this.stage = new createjs.Stage(canvas);

    // 円を作成します
    var shape = new createjs.Shape();
    shape.graphics.beginFill("white"); // 赤色で描画するように設定
    shape.graphics.drawRect(0, 0, 1024,512); //半径 100px の円を描画

    this.stage.addChild(shape); // 表示リストに追加

    var container = new createjs.Container();
    this.stage.addChild(container);

    this.drawingLayer = new DrawingLayer(this.stage,container,canvas.width,canvas.height,"#000");

    createjs.Ticker.addEventListener("tick", this.update);
  }

  update = () =>{
    this.drawingLayer.draw();

    // Stageの描画を更新します
    this.stage.update();
  }

  changeColor = (color:string) =>{
    this.drawingLayer.changeColor(color);
  }
}