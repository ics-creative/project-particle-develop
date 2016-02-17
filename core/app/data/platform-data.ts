"use strict";

import {PlatformType} from "../enum/platform-type";

export class PlatformData {
  constructor(platformType:PlatformType) {
    this.platformType = platformType;
  }

  public platformType:PlatformType;

  public isDesktop():boolean {
    return this.platformType == PlatformType.Desktop;
  }

  public enableOutputParameter():boolean {
    return true;
  }

  public enableInputParameter():boolean {
    return this.platformType == PlatformType.Desktop;
  }
}