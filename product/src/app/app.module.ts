import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./components/app.component";
import { LargeIOBox } from "./components/large-io.component";
import { SmallIOBox } from "./components/small-io.component";
import { StageComponent } from "./components/stage.component";
import { PropertyShapePanel } from "./components/property-shape.component";
import { PropertyPanel } from "./components/property.component";
import { PropertyParticlePanel } from "./components/property-particle.component";
import { PropertyTemplatePanel } from "./components/property-template.component";
import { SmallPropertyTemplateModal } from "./components/small-template.component";
import { PropertyIoModal } from "./components/property-io.component";
import { PropertyEmitterPanel } from "./components/property-emitter.component";
import { PropertyColorPanel } from "./components/property-color.component";
import { PropertyCanvasPanel } from "./components/property-canvas.component";
import { PropertyShapeItemRenderer } from "./components/property-shape-itemrenderer.component";
import { InputRangeComponent } from "./components/input-range.component";
import { PropertyColorUnit } from "./components/property-color-unit.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations:[
    AppComponent,
    LargeIOBox,
    SmallIOBox,
    StageComponent,
    PropertyPanel,
    PropertyShapePanel,
    PropertyParticlePanel,
    PropertyTemplatePanel,
    SmallPropertyTemplateModal,
    PropertyIoModal,
    PropertyEmitterPanel,
    PropertyColorPanel,
    PropertyCanvasPanel,
    PropertyShapeItemRenderer,
    InputRangeComponent,
    PropertyColorUnit
  ],
  imports:[
    BrowserModule,
    FormsModule
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule {
}
