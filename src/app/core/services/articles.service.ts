import { Inject, Injectable } from '@angular/core';
// import {Headers, Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Articles} from './interface/articles';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(@Inject('BASE_CONFIG') private config, private http: HttpClient) {
  }
  getArticles(id: string) :Observable<any>{
    return this.http.get<Articles>(`${this.config.base_url}/api/users`, { params: { delay: id } });
  }
}
