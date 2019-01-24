import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu_items = menu_items;
  
  constructor() {}


  

  ngOnInit() {}

}


const menu_items =[
  {
    item: 'main page'
  },
  {
    item: 'favorite'
  },
  {
    item: 'games'
  },
  {
    item: 'records'
  }
]