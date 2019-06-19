import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  listOfData = [
    {
      skill: 'vue',
      frame: [{
        name: 'Element-UI',
        color: 'blue'
      },{
        name: 'vux',
        color: 'magenta'
      },{
        name: 'iview',
        color: 'red'
      },{
        name: 'mint-ui',
        color: 'orange'
      }]
    },
    {
      skill: 'react',
      frame: [{
        name: 'Antd',
        color: 'blue'
      },{
        name: 'Antd-Mobile',
        color: 'purple'
      },{
        name: 'dva',
        color: 'red'
      }]
    },
    {
      skill: 'angular',
      frame: [{
        name: 'NG-ZORRO',
        color: 'blue'
      }]
    },
    {
      skill: 'jquery',
      frame: [{
        name: 'layui',
        color: 'blue'
      },{
        name: 'bootstrap',
        color: 'red'
      }]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
