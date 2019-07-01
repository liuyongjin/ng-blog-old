import { Component, OnInit } from '@angular/core';
import { ArticleService } from '@app/core/services';
import { ArticleItem, Article } from '@app/core/interface/article';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public article: ArticleItem;

  constructor(private articlesService: ArticleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.init()
  }

  init() {
    this.route.paramMap.subscribe((params) => {
      let id=Number(params.get('id'));
      this.articlesService.getArticleDetail(id).subscribe((res: Article) => {
        this.article = res.data.data as ArticleItem;
        console.log(this.article)
      });
    })
  }
}
