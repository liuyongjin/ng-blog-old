import { Component, OnInit, EventEmitter, Output , ElementRef } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  //发射事件需要写上Output EventEmitter需要一个范型
  @Output()selectLang: EventEmitter<string> = new EventEmitter();

  date = new Date();

  constructor(private el: ElementRef) { }

  ngOnInit() {
 
  }
  public selectLanguage(lang: string): void {
    this.selectLang.emit(lang);
  }
}
