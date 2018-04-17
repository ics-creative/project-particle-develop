import {Component, Input} from '@angular/core';
import {DrawingData, ShapeData} from 'particlejs';
import {LocaleData} from '../../../i18n/locale-data';

@Component({
  selector   : 'app-shape-property-panel',
  templateUrl: './property-shape.component.html',
  styleUrls  : ['property-shape.component.scss'],
})

/**
 * シェイプの選択パネルの制御クラスです。
 */
export class PropertyShapePanelComponent {
  @Input() public drawingData: DrawingData;
  @Input() public shapeIdList: string[] = new ShapeData().assetList;

  constructor(public localeData: LocaleData) {
  }

  public handleClick(shapeId: string) {

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
