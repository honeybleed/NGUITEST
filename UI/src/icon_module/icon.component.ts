/**
 * Created by honeybleed on 2017/5/5.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'ui-icon',
  template: `<span>{{getCode()}}</span>`
})
export class IconComponent {
  private code: string;
  constructor() {
    this.code = '';
  }
  getCode() {
    return this.code;
  }
}
