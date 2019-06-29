import { NgModule, Optional, SkipSelf } from '@angular/core';
//暂时不实现功能
@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    {
      provide: 'BASE_CONFIG',
      useValue: {
        base_url: 'http://blog.com/api/v1'
      }
    }
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
