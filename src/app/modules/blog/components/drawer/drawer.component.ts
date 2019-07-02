import { Component, Input, EventEmitter,OnInit , Output} from '@angular/core';
import { TagItem } from '@app/core/interface/tag';


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})

export class DrawerComponent implements OnInit {
  @Input() tag: TagItem[];
  @Output() selectTag = new EventEmitter<boolean>();
  visible = false;


  constructor() { }

  ngOnInit() {
 
  }

  toggle(): void {
    this.visible = !this.visible
  }

  clickHandle(item):void{
    this.selectTag.emit(item);
  }
}
