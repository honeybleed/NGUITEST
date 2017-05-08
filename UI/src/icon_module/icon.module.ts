/**
 * Created by honeybleed on 2017/5/5.
 */
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { IconService, IconServiceConfig } from './icon.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IconComponent,
  ],
  providers: [
    IconService
  ],
  exports: [
    IconComponent
  ]
})
export class IconModule {
  constructor(@Optional() @SkipSelf() parentModule: IconModule) {
    if (parentModule) {
      throw new Error('Icon Module is Already loaded');
    }
  }
  static forRoot(config: IconServiceConfig): ModuleWithProviders {
    return {
      ngModule: IconModule,
      providers: [
        {
          provide: IconServiceConfig,
          useValue: config
        }
      ]
    };
  }
}

