/**
 * Created by nyamogera on 2015/12/29.
 * アプリケーションルートです。
 */

class App {
  public stage:createjs.Stage;
  private drawingLayer:DrawingLayer;
  private stampLayer:StampLayer;
  private textStampLayer:TextStampLayer;

  private toolbar:Toolbar;
  private layer:ILayer[];
  private canvas:HTMLCanvasElement;

  private drawingContainer:createjs.Container;
  private canvasBackground:createjs.Shape;
  private drawLayerContainer:createjs.Container;

  private shapeSupport:ShapeSupport;
  private background:createjs.Shape;

  constructor() {

    this.layer = [];

    this.toolbar = new Toolbar();

    this.canvas = <HTMLCanvasElement>document.getElementById("canvas_drawing");

    this.canvas.width = 1024;
    this.canvas.height = 512;

    this.stage = new createjs.Stage(this.canvas);

    //  キャンバスより後ろ
    this.background = new createjs.Shape();
    this.background.graphics.beginFill("gray");
    this.background.graphics.drawRect(0, 0, 2000, 200);
    this.stage.addChild(this.background);

    //  描画コンテナ
    this.drawingContainer = new createjs.Container;

    this.stage.addChild(this.drawingContainer); // 表示リストに追加

    // 背景カラーの設定
    this.canvasBackground = new createjs.Shape();
    this.canvasBackground.graphics.beginFill("white");
    this.canvasBackground.graphics.drawRect(0, 0, 1024, 512);
    this.drawingContainer.addChild(this.canvasBackground);

    this.drawLayerContainer = new createjs.Container();
    this.drawingContainer.addChild( this.drawLayerContainer )

    this.shapeSupport = new ShapeSupport(this.stage);
    this.drawingContainer.addChild( this.shapeSupport.container);

    this.shapeSupport.container.visible = false;

    this.drawingContainer.x = 100;
    this.drawingContainer.y = 100;

    createjs.Ticker.addEventListener("tick", this.update);

    this.toolbar.addEventListener('change_tab', this.changeTab);
    this.toolbar.addEventListener('change_tool', this.changeTool);

    this.stage.addEventListener("pressmove", this.handleMouseDown);
  }

  handleMouseDown = () => {


    if( !(this.layer.length == 0 || this.layer[this.layer.length-1].isExit() )) {
      return ;
    }
    console.log("handleMouseDown" + this.toolbar.toolId);

    switch (this.toolbar.toolId) {
      case tool.TOOL_SELECT:
        break;

      case  tool.TOOL_PEN  :
        console.log("start-pen-tool");

        var container = new createjs.Container();
        this.drawLayerContainer.addChild(container);

        this.drawingLayer = new DrawingLayer(this.stage, container, this.canvas.width, this.canvas.height, "#000");
        this.drawingLayer.updateSetting(this.toolbar.drawingSetting);

        this.layer.push( this.drawingLayer );

        this.drawingLayer.start();
        break;

      case  tool.TOOL_STAMP  :

        console.log("start-star-tool");

        var stamp = new Star();
        this.stampLayer = new StampLayer(this.stage,stamp);
        this.stampLayer.updateSetting(this.toolbar.shapeSetting);
        this.stampLayer.addEventListener("show_support",this.stampLayer_showSupportHandler)
        this.drawLayerContainer.addChild(this.stampLayer.stamp);

        this.layer.push( this.stampLayer );
        this.stampLayer.start();

        this.startSupport(this.stampLayer);
        break;


      case  tool.TOOL_TEXT  :

        console.log("start-text-tool");

        this.textStampLayer = new TextStampLayer(this.stage);
        this.textStampLayer.updateSetting(this.toolbar.shapeSetting);

        this.drawLayerContainer.addChild(this.textStampLayer.stamp);
        this.textStampLayer.addEventListener("show_support",this.stampLayer_showSupportHandler)

        this.layer.push( this.textStampLayer );

        this.textStampLayer.start();
        break;
    }
  }

  startSupport = (stampLayer:StampLayer) => {

    this.supportTarget = stampLayer;
    this.shapeSupport.container.visible = true;
    this.shapeSupport.container.x = this.supportTarget.stamp.x;
    this.shapeSupport.container.y = this.supportTarget.stamp.y;
    this.shapeSupport.rotation = 0;
    this.shapeSupport.size.x = 5;
    this.shapeSupport.size.y = 5;

    this.supportTarget.updateTransformation(this.shapeSupport);

    this.shapeSupport.update();
    this.shapeSupport.updateGraphics(true);

    this.shapeSupport.startSupport();

  }

  supportTarget:StampLayer;
  stampLayer_showSupportHandler = (e:any) => {
    this.shapeSupport.container.visible = true;
    this.supportTarget = <StampLayer>e.currentTarget;
    this.shapeSupport.rotation = this.supportTarget.stamp.rotation;
    this.shapeSupport.container.x = this.supportTarget.stamp.x;
    this.shapeSupport.container.y = this.supportTarget.stamp.y;
    this.shapeSupport.size.x = this.supportTarget.stamp.size.x * 2;
    this.shapeSupport.size.y = this.supportTarget.stamp.size.y * 2;

    this.supportTarget.updateTransformation(this.shapeSupport);
    this.supportTarget.stamp.updateGraphics();

    this.shapeSupport.update();
    this.shapeSupport.updateGraphics(true);


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
    this.shapeSupport.updateGraphics();


  }

  updateDrawSetting = () => {
    this.drawingLayer.updateSetting(this.toolbar.drawingSetting);
  }
  updateShapeSetting = () => {
    this.stampLayer.updateSetting(this.toolbar.shapeSetting);
  }
}