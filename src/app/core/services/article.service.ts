import { Inject, Injectable } from '@angular/core';
// import {Headers, Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Article} from '../interface/article';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(@Inject('BASE_CONFIG') private config, private http: HttpClient) {
  }
  //获取归档列表
  getPigeonhole() :Observable<Article>{
    return this.http.post<Article>(`${this.config.base_url}/article/pigeonholeList`, {headers: this.headers});
  }
}
