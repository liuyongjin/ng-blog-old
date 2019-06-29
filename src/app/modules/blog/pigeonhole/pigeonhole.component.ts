import { Component, OnInit } from '@angular/core';
import { ArticleService } from '@app/core/services';
import { Article } from '@app/core/interface/article';

@Component({
  selector: 'app-pigeonhole',
  templateUrl: './pigeonhole.component.html',
  styleUrls: ['./pigeonhole.component.scss']
})
export class PigeonholeComponent implements OnInit {
  public article:object={};
  public ObjectKeys = Object.keys;
  constructor(private articlesService: ArticleService) { }

  ngOnInit() {
    this.articlesService.getPigeonhole().subscribe((res: Article) => {
      this.article=res.data.data;
      // console.log(this.article);
    });
  }

}
