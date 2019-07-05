import { Component, AfterViewInit, OnInit} from '@angular/core';
import { ArticleService } from '@app/core/services';
import { ArticleItem, Article } from '@app/core/interface/article';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-detail',
  // warning: few browsers support shadow DOM encapsulation at this time
  // encapsulation: ViewEncapsulation.None,, ViewEncapsulation 
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, AfterViewInit {
  public article: ArticleItem;
  public id: any;
  constructor(private articlesService: ArticleService, private router: Router, private route: ActivatedRoute, private titleService: Title, public dz: DomSanitizer) { }
  ngOnInit() {
    this.init()
  }
  ngAfterViewInit(): void {
    this.gittalkInit();
  }
  init() {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'))
      this.browseHandle()
      this.getDetail()
    })
  }
  gittalkInit(): void {
    var G = (<any>window).Gitalk;
    // 生成 gitalk 插件
    var gitalk = new G({
      clientID: '303c3f5966f9961e2f2d', //Client ID
      clientSecret: 'bc05510b52f526955d1e77958d19b99f07ec5970', //Client Secret
      repo: 'ng-blog-gittalk',//仓库名称
      owner: 'liuyongjin',//仓库拥有者
      admin: ['liuyongjin'],
      id: decodeURI(window.location.pathname),      // Ensure uniqueness and length less than 50
      distractionFreeMode: false  // Facebook-like distraction free mode
    })

    gitalk.render('gitalk-container')
  }
  getDetail(): void {
    this.articlesService.getArticleDetail(this.id).subscribe((res: Article) => {
      this.article = res.data.data as ArticleItem;
      this.titleService.setTitle(this.article.title);
    });
  }
  //处理文章内容
  securityHTML(strHTML: any) {
    return this.dz.bypassSecurityTrustHtml(strHTML);
  }

  //浏览量加一
  browseHandle(): void {
    this.articlesService.browse(this.id).subscribe((res: Article) => {
    })
  }
  //点赞加一
  praiseHandle(): void {
    this.articlesService.praise(this.id).subscribe((res) => {
      if (res.errorCode === 0) {
        this.getDetail()
      }
    });
  }
}
