/**
 * Created by nyamogera on 2016/01/06.
 */
module tool {
  export const TOOL_PEN = "tool-pen";
  export const TOOL_STAMP = "tool-stamp";
}
class Toolbar extends createjs.EventDispatcher {

  toolPenElement:HTMLLinkElement;
  toolStampElement:HTMLLinkElement;

  toolPenParametersElement:HTMLDivElement;
  toolStampParametersElement:HTMLDivElement;

  toolId:string;

  constructor() {
    super();

    this.toolId = tool.TOOL_PEN;

    createjs.EventDispatcher.initialize(Toolbar.prototype);

    this.toolPenElement = <HTMLLinkElement>document.getElementById(tool.TOOL_PEN);
    this.toolStampElement = <HTMLLinkElement>document.getElementById(tool.TOOL_STAMP);

    this.toolPenParametersElement = <HTMLDivElement>document.getElementById('tool-pen-parameters');
    this.toolStampParametersElement = <HTMLDivElement>document.getElementById('tool-stamp-parameters');

    this.toolPenElement.addEventListener("click", (e:any) => {
      this.changeTab(tool.TOOL_PEN );
    });

    this.toolStampElement.addEventListener("click", (e:any) => {
      this.changeTab(tool.TOOL_STAMP );
    });

    //  カラーピッカー
    $("#tool-pen-parameters #colorpicker").spectrum({
      showPalette: true,
      color: "#000",
      change: function (color:any) {
        app.changeColor(color.toHexString());
      }
    });
  }

  changeTab = (tabName:string) => {

    // 全部消す
    this.toolPenParametersElement.style.display = 'none';
    this.toolStampParametersElement.style.display = 'none';

    // 指定箇所のみ表示
    document.getElementById(tabName + '-parameters').style.display = 'block';

    this.toolId = tabName;

    this.dispatchEvent("change_tab");
  }
}