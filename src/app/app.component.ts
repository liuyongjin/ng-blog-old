import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //en-US zh-CN
  constructor(public translate: TranslateService,private i18n: NzI18nService, @Inject(PLATFORM_ID) private platformId: Object) {
  }
  async ngOnInit() {
    this.translate.setDefaultLang('zh-CN');
    // 语言初始化(若未设置语言, 则取浏览器语言)
    let currentLanguage = await localStorage.getItem('currentLanguage') || this.translate.getBrowserCultureLang()
    // 当在assets/i18n中找不到对应的语言翻译时，使用'zh-CN'作为默认语言
    this.translate.use(currentLanguage);
    //设置antd的语言
    this.i18n.setLocale(currentLanguage==='en_US'?en_US:zh_CN);
    // 记录当前设置的语言（判断是否是在浏览器环境）
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('currentLanguage', currentLanguage);
    }
  }
  public selectLanguage(lang: string): void {
    this.translate.use(lang);
    this.i18n.setLocale(lang==='en_US'?en_US:zh_CN);
    // 更新当前记录的语言
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('currentLanguage', lang)
    }
  }
}
