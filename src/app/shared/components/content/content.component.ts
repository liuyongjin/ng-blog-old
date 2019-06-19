import { Component, OnInit, ViewChild} from '@angular/core';
// import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  // ngAfterViewInit(): void {
  //   this.initScroll();
  // }private router: Router
  // private initScroll(): void {
    // 订阅路由事件
    // this.router.events.subscribe((event: NavigationEnd) => {
    //   // 判断路由的事件类型（也就是路由的生命周期）
    //   if (event instanceof ActivationEnd) { // 当导航成功结束时执行
    //   }
    // })
  // }

}
