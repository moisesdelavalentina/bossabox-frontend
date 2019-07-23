import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input()
  tag: string

  @Input()
  search: string

  public inSearch: boolean = false

  constructor() { }

  ngOnInit() {
    if (this.tag.indexOf(this.search) != -1 && this.search != "") {
      this.inSearch = true
    }
  }

}
