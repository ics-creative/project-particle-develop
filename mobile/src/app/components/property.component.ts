import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {PropertyColorUnit} from "./property-color-unit.component";
import {ParticleParameter} from "../assets/particle-parameter";
import {PropertyEmitterPanel} from "./property-emitter.component";
import {PropertyParticlePanel} from "./property-particle.component";
import {PropertyColorPanel} from "./property-color.component";
import {PropertyTemplatePanel} from "./property-template.component";
import {PropertyShapePanel} from "./property-shape.component";
import {PropertyCanvasPanel} from "./property-canvas.component";

"use strict";

@Component({
  selector: "property-panel",
  template: `<div class="card card-primary">
  <header class="card-header">
    <h2 class="card-title">{{localeData.settings_head}}</h2>
  </header>
  <div class="card-block">
    <!--タブ-->
    <ul class="nav nav-tabs">
      <li class="nav-item"><a class="nav-link active" href="#tab1" data-toggle="tab" title="テンプレート設定"><i class="fa fa-cloud"></i></a></li>
      <li class="nav-item"><a class="nav-link" href="#tab2" data-toggle="tab" title="エミッター設定"><i class="fa fa-gears"></i></a></li>
      <li class="nav-item"><a class="nav-link" href="#tab3" data-toggle="tab" title="パーティクル設定"><i class="fa fa-sliders"></i></a></li>
      <li class="nav-item"><a class="nav-link" href="#tab4" data-toggle="tab" title="カラー設定"><i class="fa fa-paint-brush"></i></a></li>
      <li class="nav-item"><a class="nav-link" href="#tab5" data-toggle="tab" title="形状設定"><i class="fa fa-star"></i></a></li>
      <li class="nav-item"><a class="nav-link" href="#tab6" data-toggle="tab" title="キャンバス設定"><i class="fa fa-gear"></i></a></li>
    </ul>
    <!-- / タブ-->
    <div class="tab-content">
      <particle-template-property-panel
              id="tab1"
              class="tab-pane active particle-template-property-panel"
              [drawingData]="drawingData">
      </particle-template-property-panel>

      <emitter-property-panel
              class="tab-pane"
              id="tab2"
              [drawingData]="drawingData">
      </emitter-property-panel>

      <particle-property-panel
              id="tab3"
              class="tab-pane"
              [drawingData]="drawingData">
      </particle-property-panel>

      <color-property-panel
              id="tab4"
              class="tab-pane"
              [drawingData]="drawingData">
      </color-property-panel>

      <shape-property-panel
              id="tab5"
              class="tab-pane shape-property-panel"
              [drawingData]="drawingData">
      </shape-property-panel>

      <canvas-property-panel
              id="tab6"
              class="tab-pane"
              [drawingData]="drawingData">
      </canvas-property-panel>
    </div>
  </div>
</div>`,
  inputs: ["drawingData"],
  directives: [
    PropertyColorUnit,
    PropertyEmitterPanel,
    PropertyParticlePanel,
    PropertyColorPanel,
    PropertyTemplatePanel,
    PropertyShapePanel,
    PropertyCanvasPanel],
})
export class PropertyPanel {
  private drawingData:particlejs.DrawingData;

  constructor(private localeData:LocaleData) {
  }

}
