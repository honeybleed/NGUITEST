/**
 * Created by honeybleed on 2017/5/5.
 */
import { Component, Input } from '@angular/core';
import { Icon } from './icon.type';
import { IconService } from './icon.service';

@Component({
  selector: 'ui-icon',
  template: `<span [style.font-family]="getFamily()">{{this.icon ? this.icon.code : ''}}</span>`
})
export class IconComponent {
  private icon: Icon;
  constructor(private iconService: IconService) {}
  @Input()
  set iconName(iconName: string){
    let i = this.iconService.getIcon(iconName);
    if (!i) {
      console.warn('icon that named [' + iconName + '] is not match with an Icon Type');
    }
    this.icon = i;
  }
  getFamily(): string {
    return this.iconService.getIconFamily() ? this.iconService.getIconFamily() : '';
  }
}
