import {LocaleData} from '../i18n/locale-data';
import {Component, Input} from '@angular/core';

@Component({
  selector   : 'app-shape-property-panel',
  templateUrl: '../components-html/property-shape.html'
})

/**
 * シェイプの選択パネルの制御クラスです。
 */
export class PropertyShapePanelComponent {
  @Input() public drawingData: particlejs.DrawingData;
  @Input() public shapeIdList: string[] = new particlejs.ShapeData().assetList;

  constructor(private localeData: LocaleData) {
  }

  private handleClick(shapeId: string) {

    const index = this.drawingData.shapeIdList.indexOf(shapeId);
    if (index === -1) { // 含まれていなければ
      // 追加
      this.drawingData.shapeIdList.push(shapeId);
    } else { // 含まれていたら
      // 2個以上のときのみ
      if (this.drawingData.shapeIdList.length >= 2) {
        // 削除
        this.drawingData.shapeIdList.splice(index, 1);
      }
    }
  }


}
