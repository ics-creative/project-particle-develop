import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './components/app/app.component';
import {HeaderDesktopComponent} from './components/header-desktop/header-desktop.component';
import {HeaderMobileComponent} from './components/header-mobile/header-mobile.component';
import {StageComponent} from './components/stage/stage.component';
import {PropertyShapePanelComponent} from './components/properties/property-shape/property-shape.component';
import {PropertyPanelComponent} from './components/properties/property.component';
import {PropertyParticlePanelComponent} from './components/properties/property-particle/property-particle.component';
import {PropertyTemplatePanelComponent} from './components/properties/property-template/property-template.component';
import {ModalTemplateComponent} from './components/modal-template/modal-template.component';
import {ModalExportJsonComponent} from './components/modal-export-json/modal-export-json.component';
import {PropertyEmitterPanelComponent} from './components/properties/property-emitter/property-emitter.component';
import {PropertyColorPanelComponent} from './components/properties/property-color/property-color.component';
import {PropertyCanvasPanelComponent} from './components/properties/property-canvas/property-canvas.component';
import {PropertyShapeItemRendererComponent} from './components/properties/property-shape/property-shape-itemrenderer.component';
import {InputRangeComponent} from './components/input-range/input-range.component';
import {PropertyColorUnitComponent} from './components/properties/property-color/property-color-unit.component';
import { FooterComponent } from './components/footer/footer.component';


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
    ModalExportJsonComponent,
    PropertyEmitterPanelComponent,
    PropertyColorPanelComponent,
    PropertyCanvasPanelComponent,
    PropertyShapeItemRendererComponent,
    ModalTemplateComponent,
    PropertyColorUnitComponent,
    FooterComponent,
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
