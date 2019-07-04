import { Inject, Component, OnInit } from '@angular/core';
import { ArticleService } from '@app/core/services';
import { ArticleItem, Article } from '@app/core/interface/article';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public article: ArticleItem[] = [];
  public base_img_url: string;
  public article_loading: boolean = true;
  constructor(private articlesService: ArticleService, @Inject('BASE_CONFIG') private config,private titleService: Title) {
    this.base_img_url = this.config.base_img_url;
    this.titleService.setTitle('首页');
  }

  ngOnInit() {
    this.init()
  }

  init(): void {
    this.article_loading = true;
    this.articlesService.getRandomArticle().subscribe((res: Article) => {
      this.article = res.data.data as ArticleItem[];
      this.article_loading = false;
    });
  }
}
