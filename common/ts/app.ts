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

  private background:createjs.Shape;
  private drawLayerContainer:createjs.Container;

  private shapeSupport:ShapeSupport;

  constructor() {

    this.layer = [];

    this.toolbar = new Toolbar();

    this.canvas = <HTMLCanvasElement>document.getElementById("canvas_drawing");

    this.canvas.width = 1024;
    this.canvas.height = 512;

    this.stage = new createjs.Stage(this.canvas);

    // 背景カラーの設定
    this.background = new createjs.Shape();
    this.background.graphics.beginFill("white");
    this.background.graphics.drawRect(0, 0, 1024, 512);

    this.stage.addChild(this.background); // 表示リストに追加


    this.drawLayerContainer = new createjs.Container();
    this.stage.addChild( this.drawLayerContainer )

    this.shapeSupport = new ShapeSupport(this.stage);
    this.stage.addChild( this.shapeSupport.container);

    this.shapeSupport.container.x = 500;
    this.shapeSupport.container.y = 300;

    this.shapeSupport.size.x = 100;
    this.shapeSupport.size.y = 100;

    this.shapeSupport.update();
    this.shapeSupport.draw();

    createjs.Ticker.addEventListener("tick", this.update);

    this.toolbar.addEventListener('change_tab', this.changeTab);
    this.toolbar.addEventListener('change_tool', this.changeTool);

    this.stage.addEventListener("pressmove", this.handleMouseDown);
  }

  handleMouseDown = () => {

    console.log("handleMouseDown" + this.toolbar.toolId);

    if( !(this.layer.length == 0 || this.layer[this.layer.length-1].isExit() )) {
      return ;
    }

    switch (this.toolbar.toolId) {
      case tool.TOOL_SELECT:
        break;

      case  tool.TOOL_PEN  :

        var container = new createjs.Container();
        this.drawLayerContainer.addChild(container);

        this.drawingLayer = new DrawingLayer(this.stage, container, this.canvas.width, this.canvas.height, "#000");
        this.drawingLayer.updateSetting(this.toolbar.drawingSetting);

        this.layer.push( this.drawingLayer );

        this.drawingLayer.start();
        break;

      case  tool.TOOL_STAMP  :

        var stamp = new Star();
        this.stampLayer = new StampLayer(this.stage,stamp);
        this.stampLayer.updateSetting(this.toolbar.shapeSetting);
        this.stampLayer.addEventListener("show_support",this.stampLayer_showSupportHandler)
        this.drawLayerContainer.addChild(this.stampLayer.stamp.shape);

        this.layer.push( this.stampLayer );

        this.stampLayer.start();
        break;


      case  tool.TOOL_TEXT  :

        var stamp = new Star();
        this.stampLayer = new StampLayer(this.stage,stamp);
        this.stampLayer.updateSetting(this.toolbar.shapeSetting);

        this.drawLayerContainer.addChild(this.stampLayer.stamp.shape);

        this.layer.push( this.stampLayer );

        this.stampLayer.start();
        break;
    }
  }

  supportTarget:StampLayer;
  stampLayer_showSupportHandler = (e:any) => {
    this.supportTarget = <StampLayer>e.currentTarget;
    this.shapeSupport.container.x = this.supportTarget.stamp.shape.x;
    this.shapeSupport.container.y = this.supportTarget.stamp.shape.y;

  }


  changeTab = () => {
    console.log("tabChanged");

    if( this.toolbar.toolId == tool.TOOL_SELECT) {
      this.stage.mouseChildren = true;
    } else {
      this.stage.mouseChildren = false;
    }
  }

  changeTool = () => {

    /*
    if( this.layer.length == 0 )
    {
      return ;
    }
    var currentLayer:ILayer = this.layer[this.layer.length-1];
    if ( currentLayer === this.drawingLayer ) {
      this.updateDrawSetting();
    }

    if ( currentLayer === this.stampLayer ) {
      this.updateShapeSetting();
    }*/
  }

  update = () => {
    if( this.layer.length >= 1 && !this.layer[this.layer.length-1].isExit() ) {
      this.layer[this.layer.length-1].update();
    }
    // Stageの描画を更新します
    this.stage.update();

    if( this.supportTarget ) {
      this.supportTarget.updateTransformation(this.shapeSupport);
    }

    this.shapeSupport.update();
    this.shapeSupport.draw();


  }

  updateDrawSetting = () => {
    this.drawingLayer.updateSetting(this.toolbar.drawingSetting);
  }
  updateShapeSetting = () => {
    this.stampLayer.updateSetting(this.toolbar.shapeSetting);
  }
}