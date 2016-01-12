/**
 * Created by nyamogera on 2016/01/06.
 */
module tool {
  export const TOOL_SELECT = "tool-select";
  export const TOOL_PEN = "tool-pen";
  export const TOOL_STAMP = "tool-stamp";
  export const TOOL_TEXT = "tool-text";
}
class Toolbar extends createjs.EventDispatcher {

  toolPenElement:HTMLLinkElement;
  toolStampElement:HTMLLinkElement;
  toolTextElement:HTMLLinkElement;
  toolSelectElement:HTMLLinkElement;

  toolId:string;

  shapeSetting:ShapeSetting;
  drawingSetting:DrawingSetting;
  textSetting:TextSetting;

  colorPickerLine:JQuery;
  colorPickerBase:JQuery;

  colorPickerLineElement:HTMLDivElement;
  colorPickerBaseElement:HTMLDivElement;
  textInputWrapElement:HTMLDivElement;
  textSizeWrapElement:HTMLDivElement;
  lineWidthWrapElement:HTMLDivElement;

  textInputElement:HTMLInputElement;
  lineWidthElement:HTMLInputElement;
  textSizeElement:HTMLInputElement;

  constructor() {
    super();

    this.shapeSetting = new ShapeSetting();
    this.drawingSetting = new DrawingSetting();
    this.textSetting = new TextSetting();

    createjs.EventDispatcher.initialize(Toolbar.prototype);

    //  メインツール切り替え
    this.toolSelectElement = <HTMLLinkElement>document.getElementById(tool.TOOL_SELECT);
    this.toolPenElement = <HTMLLinkElement>document.getElementById(tool.TOOL_PEN);
    this.toolStampElement = <HTMLLinkElement>document.getElementById(tool.TOOL_STAMP);
    this.toolTextElement = <HTMLLinkElement>document.getElementById(tool.TOOL_TEXT);

    this.toolSelectElement.addEventListener("click", (e:any) => {
      this.changeTab(tool.TOOL_SELECT );
    })
    this.toolPenElement.addEventListener("click", (e:any) => {
      this.changeTab(tool.TOOL_PEN );
    });
    this.toolStampElement.addEventListener("click", (e:any) => {
      this.changeTab(tool.TOOL_STAMP );
    });
    this.toolTextElement.addEventListener("click", (e:any) => {
      this.changeTab(tool.TOOL_TEXT );
    });


    //  サブツール
    this.colorPickerLineElement = <HTMLDivElement>document.getElementById("colorpicker-line-wrap");
    this.colorPickerBaseElement = <HTMLDivElement>document.getElementById("colorpicker-base-wrap");
    this.textInputWrapElement = <HTMLDivElement>document.getElementById("textinput-wrap");
    this.textSizeWrapElement = <HTMLDivElement>document.getElementById("textsize-wrap");
    this.lineWidthWrapElement = <HTMLDivElement>document.getElementById("linewidth-wrap");

    //  初期カラー設定
    this.drawingSetting.lineColor = "#000";
    this.shapeSetting.lineColor = "#000";
    this.textSetting.lineColor = "#000";
    this.shapeSetting.baseColor = "#000";
    this.textSetting.text = "hello"

    //  カラーピッカー(ライン)
    this.colorPickerLine = $("#colorpicker-line");
    this.colorPickerLine.spectrum({
      showPalette: true,
      color: "#000",
      change: (color:any) => {
        this.drawingSetting.lineColor = color.toHexString();
        this.shapeSetting.lineColor = color.toHexString();
        this.textSetting.lineColor = color.toHexString();
        this.dispatchEvent("change_tool");
      }
    });

    //  カラーピッカー(ベース)
    this.colorPickerBase = $("#colorpicker-base");
    this.colorPickerBase.spectrum({
      showPalette: true,
      color: "#000",
      change:  (color:any) => {
      this.shapeSetting.baseColor =  color.toHexString();
        this.dispatchEvent("change_tool");
      }
    });


    //  テキスト入力
    this.textInputElement = <HTMLInputElement>document.getElementById("textinput");
    this.textInputElement.addEventListener("keyup", (e:any ) => {
      this.textSetting.text =  this.textInputElement.value;
      console.log(this.textSetting.text);

      this.dispatchEvent("change_tool");
    });

    //  線幅
    this.lineWidthElement = <HTMLInputElement>document.getElementById("linewidth");
    this.lineWidthElement.addEventListener("change", (e:any ) => {

      this.shapeSetting.lineWidth =  parseInt(this.lineWidthElement.value);
      this.drawingSetting.lineWidth =  parseInt(this.lineWidthElement.value);

      this.dispatchEvent("change_tool");
    });

    //  テキストサイズ
    this.textSizeElement = <HTMLInputElement>document.getElementById("textsize");
    this.textSizeElement.addEventListener("change", (e:any ) => {
      this.textSetting.textSize =  parseInt(this.textSizeElement.value);

      this.dispatchEvent("change_tool");
    });

    this.changeTab( tool.TOOL_PEN ,false );
  }

  changeTab = (tabName:string,dispatch:boolean = true) => {

    this.selectTool(tabName);

    this.toolId = tabName;

    if (dispatch) {
      this.dispatchEvent("change_tab");
    }
  }


  selectTool = (toolId:string) => {

    this.colorPickerLineElement.style.display = 'none';
    this.colorPickerBaseElement.style.display = 'none';
    this.textInputWrapElement.style.display = 'none';
    this.textSizeWrapElement.style.display = 'none';
    this.lineWidthWrapElement.style.display = 'none';

    switch( toolId ) {
      case tool.TOOL_SELECT:
        break;
      case tool.TOOL_PEN:
        this.colorPickerLineElement.style.display = 'block';
        this.lineWidthWrapElement.style.display = 'block';
        break;
      case tool.TOOL_STAMP:
        this.colorPickerLineElement.style.display = 'block';
        this.colorPickerBaseElement.style.display = 'block';
        this.lineWidthWrapElement.style.display = 'block';
        break;
      case tool.TOOL_TEXT:
        this.colorPickerLineElement.style.display = 'block';
        this.textInputWrapElement.style.display = 'block';
        this.textSizeWrapElement.style.display = 'block';
        break;

    }

  }
}