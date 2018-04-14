import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './components/app.component';
import {HeaderDesktopComponent} from './components/header-desktop.component';
import {HeaderMobileComponent} from './components/header-mobile.component';
import {StageComponent} from './components/stage.component';
import {PropertyShapePanelComponent} from './components/property-shape.component';
import {PropertyPanelComponent} from './components/property.component';
import {PropertyParticlePanelComponent} from './components/property-particle.component';
import {PropertyTemplatePanelComponent} from './components/property-template.component';
import {ModalTemplateComponent} from './components/modal-template.component';
import {PropertyIoModalComponent} from './components/property-io.component';
import {PropertyEmitterPanelComponent} from './components/property-emitter.component';
import {PropertyColorPanelComponent} from './components/property-color.component';
import {PropertyCanvasPanelComponent} from './components/property-canvas.component';
import {PropertyShapeItemRendererComponent} from './components/property-shape-itemrenderer.component';
import {InputRangeComponent} from './components/input-range.component';
import {PropertyColorUnitComponent} from './components/property-color-unit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderDesktopComponent,
    HeaderMobileComponent,
    StageComponent,
    InputRangeComponent,
    PropertyPanelComponent,
    PropertyShapePanelComponent,
    PropertyParticlePanelComponent,
    PropertyTemplatePanelComponent,
    PropertyIoModalComponent,
    PropertyEmitterPanelComponent,
    PropertyColorPanelComponent,
    PropertyCanvasPanelComponent,
    PropertyShapeItemRendererComponent,
    ModalTemplateComponent,
    PropertyColorUnitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
