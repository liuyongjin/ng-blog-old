import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { addDays } from 'date-fns';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  @Output() //发射事件需要写上Output
  //EventEmitter需要一个范型
  selectLang: EventEmitter<string> = new EventEmitter();

  dateRange = [ new Date(), addDays(new Date(), 3) ];

  constructor() { }

  ngOnInit() {
  }
  public selectLanguage(lang: string): void {
    this.selectLang.emit(lang);
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }


}
