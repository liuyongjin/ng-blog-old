import { Component, OnInit } from '@angular/core';
import { Tag } from '@app/core/interface/tag';
import { TagService } from '@app/core/services';
import { ArticleService } from '@app/core/services';
import { ArticleItem,Article } from '@app/core/interface/article';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  public article:ArticleItem[] = [];
  public title = "";
  public tag = [];
  constructor(private tagService: TagService,private articlesService: ArticleService) { }

  ngOnInit() {
    this.init();
  }

  public init():void{
    this.tagService.getTag().subscribe((res: Tag) => {
      this.tag = res.data.data;
      //默认获取第一个标签的文章
      if(this.tag[0]){
        this.title=this.tag[0].name;
        this.getArticle(this.tag[0].id);
      }
    });
  }

  selectTagHandle(item):void{
    this.title=item.name;
    this.getArticle(item.id)
  }
  getArticle(id:number):void{
    this.articlesService.searchArticleByTag(id).subscribe((res: Article) => {
      this.article=res.data.data as ArticleItem[];
    });
  }
}
