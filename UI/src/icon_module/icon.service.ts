import { Icon } from './icon.type';
import { Injectable, Optional } from '@angular/core';

export class IconServiceConfig {
  constructor(public fontFamily: string, public iconMap: Icon[]) { }
}

@Injectable()
export class IconService {
  private _fontFamily: string;
  private _iconMap: Icon[];
  constructor(@Optional() config: IconServiceConfig) {
    if (config) {
      this._iconMap = config.iconMap;
      this._fontFamily = config.fontFamily;
    } else {
      this._fontFamily = null;
      this._iconMap = null;
    }
  }
  public getAllIcons(): Icon[] {
    return this._iconMap;
  }
  public getIcon(name: string) {
    return this._iconMap.find(
      icon => {
        return icon.name === name;
      }
    );
  }
  public getIconFamily(): string {
    return this._fontFamily;
  }
}
