import { Component, OnInit, Input } from '@angular/core';
import { locateDirectiveOrProvider } from '@angular/core/src/render3/di';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() PostName: string;
  @Input() PostDate: 'new Date()';
  @Input() PostData : string;
  @Input() PostLove : number;
  @Input() PostIndex : number;
  constructor() { }
  getColor() {
    if (this.PostLove > 0) {
      return 'green';
    } else if (this.PostLove < 0) {
      return 'red';
    }
  }
  OnLove() {
    this.PostLove= this.PostLove+1;
    return this.PostLove;
    }
  OnDontLove() {
    this.PostLove= this.PostLove-1;
    return this.PostLove;
    }
    getLove() {
      if (this.PostLove > 0) {
        return true;
      } else { return false}
      }
   getNoLove() {
      if (this.PostLove < 0) {
        return true;
      } else { return false}
      }
  ngOnInit() {
  }

}
