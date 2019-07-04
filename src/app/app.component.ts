import { Component, Inject, ViewChild, OnInit, AfterViewInit,PLATFORM_ID,OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("layout", {static: false}) layout: any;
  @ViewChild("appTop", {static: false}) appTop: any;
  private scroll = null;
  private lastScrollTop = 0;
  public router_path: string='/';
  //该页面有些示例后期去掉
  //en-US zh-CN
  constructor(public translate: TranslateService, private i18n: NzI18nService, @Inject(PLATFORM_ID) private platformId: Object,private router: Router) {
  }
  ngOnInit() {
    this.onEvents();
    this.initLanguage();
  }
  ngAfterViewInit(): void {
    this.initScroll();
  }
  ngOnDestroy() {
    this.scroll&&this.scroll.unsubscribe();
  }
  onEvents() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.router_path = event.urlAfterRedirects
      }
    })
  }
  public initLanguage() {
    this.translate.setDefaultLang('zh_CN');
    // 语言初始化(若未设置语言, 则取浏览器语言,默认中文)
    let currentLanguage = 'zh-CN';
    if (isPlatformBrowser(this.platformId)) {
      currentLanguage = localStorage.getItem('currentLanguage') || this.translate.getBrowserCultureLang();
    }
    // 当在assets/i18n中找不到对应的语言翻译时，使用'zh-CN'作为默认语言
    this.translate.use(currentLanguage);
    //设置antd的语言
    this.i18n.setLocale(currentLanguage === 'en_US' ? en_US : zh_CN);
    // 记录当前设置的语言（判断是否是在浏览器环境）
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('currentLanguage', currentLanguage);
    }
  }

  public selectLanguage(lang: string): void {
    this.translate.use(lang);
    this.i18n.setLocale(lang === 'en_US' ? en_US : zh_CN);
    // 更新当前记录的语言
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('currentLanguage', lang)
    }
  }

  private initScroll(): void {
    if(!this.appTop){
      return;
    }
    //滚动隐藏导航动画
    let nav = this.appTop.el.nativeElement.querySelector('.ng-blog-header');
    nav.style.top = '0px';
    nav.style.backgroundColor = 'rgb(255, 255, 255)';
    this.scroll = fromEvent(this.layout.elementRef.nativeElement, 'scroll').pipe(throttleTime(50)).subscribe((e: Event) => {
      let target = <HTMLElement>e.target;
      let scrollTop = target.scrollTop;
      let diff = scrollTop - this.lastScrollTop > 0;
      if (scrollTop > 70) {
        //改变颜色
        if (nav.style.backgroundColor == 'rgb(255, 255, 255)') {
          nav.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }
        //改变dom位置
        if (diff && nav.style.top === '0px') {
          nav.style.top = '-64px';
        } else if (!diff && nav.style.top === '-64px') {
          nav.style.top = '0px';
        }
      } else if (scrollTop < 70) {
        //改变颜色
        if (nav.style.backgroundColor == 'rgba(0, 0, 0, 0)') {
          nav.style.backgroundColor = 'rgb(255, 255, 255)';
        }
        //改变dom位置
        if (nav.style.top === '-64px') {
          nav.style.top = '0px';
        }
      }
      this.lastScrollTop = scrollTop;
    });
  }
  
}
