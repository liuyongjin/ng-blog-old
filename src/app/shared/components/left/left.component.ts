import { Inject, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  public router_path: string;
  public base_url: string;

  constructor(private router: Router, @Inject('BASE_CONFIG') private config) {
    this.base_url = this.config.base_img_url;
  }

  ngOnInit() {
    this.onEvents();
  }

  onEvents() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.router_path = event.urlAfterRedirects
      }
    })
  }
}
