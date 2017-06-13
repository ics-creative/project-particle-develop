import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app.component';
import {LargeIoBoxComponent} from './components/large-io.component';
import {SmallIoBox} from './components/small-io.component';
import {StageComponent} from './components/stage.component';
import {PropertyShapePanelComponent} from './components/property-shape.component';
import {PropertyPanelComponent} from './components/property.component';
import {PropertyParticlePanelComponent} from './components/property-particle.component';
import {PropertyTemplatePanelComponent} from './components/property-template.component';
import {SmallPropertyTemplateModalComponent} from './components/small-template.component';
import {PropertyIoModalComponent} from './components/property-io.component';
import {PropertyEmitterPanelComponent} from './components/property-emitter.component';
import {PropertyColorPanelComponent} from './components/property-color.component';
import {PropertyCanvasPanelComponent} from './components/property-canvas.component';
import {PropertyShapeItemRendererComponent} from './components/property-shape-itemrenderer.component';
import {InputRangeComponent} from './components/input-range.component';
import {PropertyColorUnitComponent} from './components/property-color-unit.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LargeIoBoxComponent,
    SmallIoBox,
    StageComponent,
    PropertyPanelComponent,
    PropertyShapePanelComponent,
    PropertyParticlePanelComponent,
    PropertyTemplatePanelComponent,
    SmallPropertyTemplateModalComponent,
    PropertyIoModalComponent,
    PropertyEmitterPanelComponent,
    PropertyColorPanelComponent,
    PropertyCanvasPanelComponent,
    PropertyShapeItemRendererComponent,
    InputRangeComponent,
    PropertyColorUnitComponent
  ],
  imports     : [
    BrowserModule,
    FormsModule
  ],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
