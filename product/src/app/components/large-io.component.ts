import {LocaleData} from '../i18n/locale-data';
import {LocaleEnData} from '../i18n/locale-en';
import {LocaleJaData} from '../i18n/locale-ja';
import {LocaleManager} from '../i18n/locale-manager';
import {PlatformData} from '../data/platform-data';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector   : 'app-large-io-box',
  templateUrl: '../components-html/large-io-box.html'
})

export class LargeIoBoxComponent {
  @Output() public exportSvgEvent        = new EventEmitter();
  @Output() public exportPngEvent        = new EventEmitter();
  @Output() public exportJpgEvent        = new EventEmitter();
  @Output() public exportWebpEvent       = new EventEmitter();
  @Output() private exportParameterEvent = new EventEmitter();
  @Output() public importParameterEvent  = new EventEmitter();

  @Input() public drawingData: particlejs.DrawingData;
  @Input() public platformData: PlatformData;

  public lastSelectFile: any;

  constructor(private localeData: LocaleData) {
  }

  private exportParameter(): void {
    this.exportParameterEvent.emit(null);
  }

  private exportSvg(): void {
    this.exportSvgEvent.emit(null);
  }

  private exportPng(): void {
    this.exportPngEvent.emit(null);
  }

  private exportJpg(): void {
    this.exportJpgEvent.emit(null);
  }

  private exportWebp(): void {
    this.exportWebpEvent.emit(null);
  }

  private selectParameterFile(obj: any): void {
    this.lastSelectFile = obj.target.files[0];

    this.importParameterEvent.emit(null);
  }

  private selectEn(): void {
    new LocaleManager().changeLocale(this.localeData, new LocaleEnData());
  }

  private selectJa(): void {
    new LocaleManager().changeLocale(this.localeData, new LocaleJaData());
  }

}
