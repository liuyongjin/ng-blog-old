import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Tag} from '../interface/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(@Inject('BASE_CONFIG') private config, private http: HttpClient) {
  }

  //获取标签列表(获取所有)
  getTag(): Observable<Tag> {
    return this.http.post<Tag>(`${this.config.base_url}/tag/index`, { pageSize:1000});
  }
}
