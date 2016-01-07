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

  textInputElement:HTMLInputElement;

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


    //  カラーピッカー(ライン)
    this.colorPickerLine = $("#colorpicker-line");
    this.colorPickerLine.spectrum({
      showPalette: true,
      color: "#000",
      change: (color:any) => {
        this.drawingSetting.lineColor = color.toHexString();
        this.shapeSetting.lineColor = color.toHexString();
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
    this.textInputElement.addEventListener("change", (e:any ) => {
      this.textSetting.text =  this.textInputElement.value;
      console.log(this.textSetting.text);

      this.dispatchEvent("change_tool");
    });

    this.changeTab( tool.TOOL_PEN ,false );

  }
  changeTab = (tabName:string,dispatch:boolean = true) => {

    this.colorPickerLineElement.style.display = 'none';
    this.colorPickerBaseElement.style.display = 'none';
    this.textInputWrapElement.style.display = 'none';

    switch( tabName ) {
      case tool.TOOL_SELECT:
        //  選択ツール、何も表示しないとタブごと消えてしまうので、困る。
        this.colorPickerLineElement.style.display = 'block';

        break;
      case tool.TOOL_PEN:
        this.colorPickerLineElement.style.display = 'block';
        break;
      case tool.TOOL_STAMP:
        this.colorPickerLineElement.style.display = 'block';
        this.colorPickerBaseElement.style.display = 'block';
        break;
      case tool.TOOL_TEXT:
        this.colorPickerLineElement.style.display = 'block';
        this.colorPickerBaseElement.style.display = 'block';
        this.textInputWrapElement.style.display = 'block';
        break;

    }


    this.toolId = tabName;

    if( dispatch ) {
      this.dispatchEvent("change_tab");
    }
  }
}