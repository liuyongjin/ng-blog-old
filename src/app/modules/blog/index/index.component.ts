import { Inject, Component, OnInit,PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public base_img_url: string;
  public show_particles:boolean=false;

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor(@Inject('BASE_CONFIG') private config, @Inject(PLATFORM_ID) private platformId: Object,private titleService: Title) {
    this.base_img_url = this.config.base_img_url;
    if (isPlatformBrowser(this.platformId)) {
      this.show_particles=true;
    }
    this.titleService.setTitle('angular博客');
  }

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': 1000,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'background-color': 'rgba(0,0,0,0.5)'
    };

    this.myParams = {
      particles: {
        number: {
          value: 80,
        },
        color: {
          value: '#fff'
        },
        shape: {
          type: 'triangle',
        },
        move: {
          attract: {
            enable: true
          }
        }
      }
    };
  }

}
