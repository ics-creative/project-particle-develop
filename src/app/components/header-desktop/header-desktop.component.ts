import {DrawingData} from 'particlejs';
import {LocaleData} from '../../i18n/locale-data';
import {LocaleEnData} from '../../i18n/locale-en';
import {LocaleJaData} from '../../i18n/locale-ja';
import {LocaleManager} from '../../i18n/locale-manager';
import {PlatformData} from '../../data/platform-data';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrls  : ['header-desktop.component.scss'],
})

export class HeaderDesktopComponent {
  @Output() public exportSvgEvent = new EventEmitter();
  @Output() public exportPngEvent = new EventEmitter();
  @Output() public exportJpgEvent = new EventEmitter();
  @Output() public exportWebpEvent = new EventEmitter();
  @Output() public exportParameterEvent = new EventEmitter();
  @Output() public importParameterEvent = new EventEmitter();

  @Input() public drawingData: DrawingData;
  @Input() public platformData: PlatformData;

  public lastSelectFile: any;

  constructor(public localeData: LocaleData) {
  }

  public exportParameter(): void {
    this.exportParameterEvent.emit(null);
  }

  public exportSvg(): void {
    this.exportSvgEvent.emit(null);
  }

  public exportPng(): void {
    this.exportPngEvent.emit(null);
  }

  public exportJpg(): void {
    this.exportJpgEvent.emit(null);
  }

  public exportWebp(): void {
    this.exportWebpEvent.emit(null);
  }

  public selectParameterFile(obj: any): void {
    this.lastSelectFile = obj.target.files[0];

    this.importParameterEvent.emit(null);
  }

  public selectEn(): void {
    new LocaleManager().changeLocale(this.localeData, new LocaleEnData());
  }

  public selectJa(): void {
    new LocaleManager().changeLocale(this.localeData, new LocaleJaData());
  }

}
