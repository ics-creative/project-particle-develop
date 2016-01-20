/**
 * Created by nyamogera on 2016/01/20.
 */

export class Ruler {

  public container:createjs.Container;
  private base:createjs.Shape;
  private mouseBase:createjs.Shape;
  private verticalTextList:createjs.Text[];
  private horizontalTextList:createjs.Text[];
  private stage:createjs.Stage;

  public width:number;
  public height:number;

  constructor(stage:createjs.Stage) {
    this.stage = stage;
    this.container = new createjs.Container();
    this.base = new createjs.Shape();
    this.container.addChild(this.base);

    this.mouseBase = new createjs.Shape();
    this.container.addChild(this.mouseBase);

    this.verticalTextList = new Array();
    this.horizontalTextList = new Array();
  }

  setSize(ws:number,hs:number) {
    this.width = ws;
    this.height = hs;

    let distance:number = 35;
    var w:number = Math.floor(this.width / distance);
    var h:number = Math.floor(this.height / distance);

    let graphics = this.base.graphics;
    graphics.clear();
    graphics.beginStroke("white");

    graphics.beginFill(0,0,this.w,this.h);
    for(var i = 0; i < w; i ++ ) {
      let ii = (i);
      if(this.horizontalTextList.length <= ii ) {
        this.horizontalTextList.push( new createjs.Text((i*distance)+"","Arial 20px","white"));
      }
      this.horizontalTextList[ii].visible = true;
      this.horizontalTextList[ii].x = (i * distance);
      this.horizontalTextList[ii].y = -20;
      this.horizontalTextList[ii].textAlign ="center";
      this.container.addChild(this.horizontalTextList[ii]);

      graphics.moveTo((i*distance),-5);
      graphics.lineTo((i*distance),0);
    }
    for(var i = w; i < this.horizontalTextList.length; i ++ ) {
      this.horizontalTextList[i].visible = false;
    }

    for(var i = 0; i < h; i ++ ) {
      let ii = (i);
      if(this.verticalTextList.length <= ii ) {
        this.verticalTextList.push( new createjs.Text((i*distance)+"","Arial 20px","white"));
      }
      this.verticalTextList[ii].visible = true;
      this.verticalTextList[ii].y = (i * distance);
      this.verticalTextList[ii].x = -20;
      this.verticalTextList[ii].textAlign ="right";
      this.container.addChild(this.verticalTextList[ii]);

      graphics.moveTo(-5,(i*distance));
      graphics.lineTo(0,(i*distance));
    }

    for(var i = h; i < this.verticalTextList.length; i ++ ) {
      this.verticalTextList[i].visible = false;
    }
  }

  update() {
    let mousePt = this.container.globalToLocal(this.stage.mouseX,this.stage.mouseY);
    let graphics = this.mouseBase.graphics;

    graphics.clear();
    graphics.beginStroke("skyblue");

    if( mousePt.x >= 0 && mousePt.x <= this.width )
    {
      graphics.moveTo(mousePt.x, 0);
      graphics.lineTo(mousePt.x,-8);
    }

    if( mousePt.y >= 0 && mousePt.y <= this.height )
    {
      graphics.moveTo(0,mousePt.y);
      graphics.lineTo(-8,mousePt.y);
    }

  }
}