/**
 * Created by nyamogera on 2015/12/29.
 * アプリケーションルートです。
 */

class App {
  public stage:createjs.Stage;
  private drawingLayer:DrawingLayer;
  private stampLayer:StampLayer;
  private toolbar:Toolbar;
  private layer:ILayer[];
  private canvas:HTMLCanvasElement;

  constructor() {

    this.layer = [];

    this.toolbar = new Toolbar();

    this.canvas = <HTMLCanvasElement>document.getElementById("canvas_drawing");

    this.canvas.width = 1024;
    this. canvas.height = 512;

    this.stage = new createjs.Stage(this.canvas);

    // 円を作成します
    var shape = new createjs.Shape();
    shape.graphics.beginFill("white"); // 赤色で描画するように設定
    shape.graphics.drawRect(0, 0, 1024, 512); //半径 100px の円を描画

    this.stage.addChild(shape); // 表示リストに追加

    createjs.Ticker.addEventListener("tick", this.update);

    this.toolbar.addEventListener('change_tab', this.changeTab);


    this.stage.addEventListener("pressmove", this.handleMouseDown);
    this.stage.addEventListener("pressup", this.handleMouseUp);
  }

  handleMouseDown = () => {

    console.log("handleMouseDown" + this.toolbar.toolId);
    switch (this.toolbar.toolId) {
      case  tool.TOOL_PEN  :

        if( this.layer.length == 0 || this.layer[this.layer.length-1] != this.drawingLayer) {
          var container = new createjs.Container();
          this.stage.addChild(container);

          this.drawingLayer = new DrawingLayer(this.stage, container, this.canvas.width, this.canvas.height, "#000");
          this.layer.push( this.drawingLayer );
        }

        this.drawingLayer.handleMouseDown();
        break;

      case  tool.TOOL_STAMP  :

        if( this.layer.length == 0 || this.stampLayer == null || !this.stampLayer.locked ) {
          var stamp = new Star();
          this.stampLayer = new StampLayer(this.stage,stamp);
          this.stampLayer.locked = true;

          this.stage.addChild(this.stampLayer.stamp.shape);

          this.layer.push( this.stampLayer );
          this.stampLayer.handleMouseDown();
        } else {
          if( this.stampLayer.locked ){
            this.stampLayer.scaleUpdate();
          }
        }


        break;
    }
  }

  handleMouseUp = () => {
    console.log("handleMouseUp");
    switch (this.toolbar.toolId) {
      case tool.TOOL_PEN  :
        if( this.drawingLayer ) {
          this.drawingLayer.handleMouseUp();
        }
        break;
      case tool.TOOL_STAMP :

        if( this.stampLayer ) {
          this.stampLayer.locked = false;
        }

        break;
    }
  }

  changeTab = () => {
    console.log("tabChanged");
  }

  update = () => {
    if( this.drawingLayer ) {
      this.drawingLayer.draw();
    }
    // Stageの描画を更新します
    this.stage.update();
  }

  changeColor = (color:string) => {
    this.drawingLayer.changeColor(color);
  }
}