import { Component, OnInit } from '@angular/core';
import { ArticleService } from '@app/core/services';
import { Article } from '@app/core/interface/article';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pigeonhole',
  templateUrl: './pigeonhole.component.html',
  styleUrls: ['./pigeonhole.component.scss']
})
export class PigeonholeComponent implements OnInit {
  public article:object={};
  public ObjectKeys = Object.keys;
  constructor(private articlesService: ArticleService,private titleService: Title) {this.titleService.setTitle('归档');}

  ngOnInit() {
    this.articlesService.getPigeonhole().subscribe((res: Article) => {
      this.article=res.data.data;
    });
  }

}
