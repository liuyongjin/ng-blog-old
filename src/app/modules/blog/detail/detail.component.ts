import { Component, OnInit } from '@angular/core';
import { ArticleService } from '@app/core/services';
import { ArticleItem, Article } from '@app/core/interface/article';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public article: ArticleItem;
  public id: any;
  constructor(private articlesService: ArticleService, private router: Router, private route: ActivatedRoute,private titleService: Title) { }

  ngOnInit() {
    this.init()
  }

  init() {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'))
      this.browseHandle()
      this.getDetail()
    })
  }

  getDetail():void{
    this.articlesService.getArticleDetail(this.id).subscribe((res: Article) => {
      this.article = res.data.data as ArticleItem;
      this.titleService.setTitle(this.article.title);
    });
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
