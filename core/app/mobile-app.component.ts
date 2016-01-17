import {AppComponent} from "./app.component";
/**
 * Created by nyamogera on 2016/01/17.
 */


export class MobileAppComponent extends AppComponent{

  handleSVGClick(){
    //this.stageComponent.exportSVG().then(this.openSVGExportWindow);
  }

  handlePNGClick() {
    this.stageComponent.runExportSP().then(function () {
    });
  }

  handleCamera() {
    this.stageComponent.runCamera().then(function() {
    });
  }



  openSVGExportWindow = () =>{
    alert("モバイルアプリでは使用不可能です");
    //window.open("data:image/svg+xml,\n"+encodeURIComponent(this.stageComponent.getParticleSVGString()));
  }

  handleExportParamaterClick(){
    alert("paramater!");
    console.log("handleExportParamaterClick");
  }
}