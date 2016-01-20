/**
 * ルーラーの制御クラスです。
 */
export class Ruler {

  public container:createjs.Container;
  private base:createjs.Shape;
  private mouseBase:createjs.Shape;
  private verticalTextList:createjs.Text[];
  private horizontalTextList:createjs.Text[];
  private stage:createjs.Stage;

  private FONT_COLOR = "#888";

  public width:number;
  public height:number;

  constructor(stage:createjs.Stage) {
    this.stage = stage;
    this.container = new createjs.Container();
    this.base = new createjs.Shape();
    this.container.addChild(this.base);

    this.mouseBase = new createjs.Shape();
    this.container.addChild(this.mouseBase);

    this.verticalTextList = [];
    this.horizontalTextList = [];
  }

  public setSize(ws:number, hs:number) {
    this.width = ws;
    this.height = hs;

    let distance:number = 35;
    let w:number = Math.floor(this.width / distance);
    let h:number = Math.floor(this.height / distance);

    let graphics = this.base.graphics;
    graphics.clear();
    graphics.beginStroke(this.FONT_COLOR);

    for (let i = 0; i < w; i++) {
      let ii = (i);
      if (this.horizontalTextList.length <= ii) {
        this.horizontalTextList.push(new createjs.Text((i * distance) + "", "Arial 20px", this.FONT_COLOR));
      }
      this.horizontalTextList[ii].visible = true;
      this.horizontalTextList[ii].x = (i * distance);
      this.horizontalTextList[ii].y = -20;
      this.horizontalTextList[ii].rotation = -90;
      this.horizontalTextList[ii].textAlign = "center";
      this.horizontalTextList[ii].textBaseline = "middle";
      this.container.addChild(this.horizontalTextList[ii]);

      graphics.moveTo((i * distance), -5);
      graphics.lineTo((i * distance), 0);
    }
    for (let i = w; i < this.horizontalTextList.length; i++) {
      this.horizontalTextList[i].visible = false;
    }

    for (let i = 0; i < h; i++) {
      let ii = (i);
      if (this.verticalTextList.length <= ii) {
        this.verticalTextList.push(new createjs.Text((i * distance) + "", "Arial 20px", this.FONT_COLOR));
      }
      this.verticalTextList[ii].visible = true;
      this.verticalTextList[ii].y = (i * distance);
      this.verticalTextList[ii].x = -20;
      this.verticalTextList[ii].textAlign = "right";
      this.verticalTextList[ii].textBaseline = "middle";
      this.container.addChild(this.verticalTextList[ii]);

      graphics.moveTo(-5, (i * distance));
      graphics.lineTo(0, (i * distance));
    }

    for (let i = h; i < this.verticalTextList.length; i++) {
      this.verticalTextList[i].visible = false;
    }

    graphics.beginFill("red")
    graphics.drawRect(0, 0, this.width, this.height);
  }

  public update() {
    let mousePt = this.container.globalToLocal(this.stage.mouseX, this.stage.mouseY);
    let graphics = this.mouseBase.graphics;

    graphics.clear();
    graphics.beginStroke("#6699ff");

    if (mousePt.x >= 0 && mousePt.x <= this.width) {
      graphics.moveTo(mousePt.x, 0);
      graphics.lineTo(mousePt.x, -16);
    }

    if (mousePt.y >= 0 && mousePt.y <= this.height) {
      graphics.moveTo(0, mousePt.y);
      graphics.lineTo(16, mousePt.y);
    }

  }
}