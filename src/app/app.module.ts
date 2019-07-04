import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BlogModule } from './modules/blog/blog.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { BaseInterceptor } from '@app/core/interceptors';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { IconDefinition } from '@ant-design/icons-angular';

// 引入需要的图标
import {
  GlobalOutline,
  GithubOutline,
  ReadOutline,
  LikeOutline,
  TagOutline,
  TagsOutline,
  SearchOutline,
  CloseOutline,
  InfoCircleOutline,
  CloseCircleFill,
  ReloadOutline,
  CalendarFill
} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [
  GlobalOutline,
  GithubOutline,
  ReadOutline,
  LikeOutline,
  TagOutline,
  TagsOutline,
  SearchOutline,
  CloseOutline,
  InfoCircleOutline,
  CloseCircleFill,
  ReloadOutline,
  CalendarFill
];

registerLocaleData(zh);

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SharedModule,
    BlogModule,
    CoreModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //i18n配置
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    //进度条配置
    NgProgressModule.withConfig({
      color: '#1976d2'
    }),
    NgProgressHttpModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true },
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' },
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
