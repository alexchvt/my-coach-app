import { Component, OnInit, Directive, NgModule, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss']
})
export class MenuMainComponent implements OnInit {

  searchContent: string;
  @Output() searchToken = new EventEmitter<string>();

  constructor() {}

    sendSearch() {
      this.searchToken.emit(this.searchContent);
      console.log(this.searchToken)
    }

 

  ngOnInit() {
  }

}
