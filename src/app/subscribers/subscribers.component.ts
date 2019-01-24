import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent implements OnInit {
  subscribers = subscribers;

  constructor() { }

  ngOnInit() {
  }

}


const subscribers = [
  {
    user_photo: './../../assets/img/subscribers/user-1.png',
    user_name: 'Rachel Morgan',
    user_level: '414'
  },
  {
    user_photo: './../../assets/img/subscribers/user-2.png',
    user_name: 'Debra Fields',
    user_level: '34'
  },
  {
    user_photo: './../../assets/img/subscribers/user-3.png',
    user_name: 'Christopher Jordan',
    user_level: '26'
  },
  {
    user_photo: './../../assets/img/subscribers/user-4.png',
    user_name: 'Bobby Franklin',
    user_level: '34'
  },
  {
    user_photo: './../../assets/img/subscribers/user-5.png',
    user_name: 'Cynthia Davis',
    user_level: '34'
  },
  {
    user_photo: './../../assets/img/subscribers/user-6.png',
    user_name: 'Roy Gonzalez',
    user_level: '26'
  },
  {
    user_photo: './../../assets/img/subscribers/user-7.png',
    user_name: 'Rachel Murray',
    user_level: '34'
  },
  {
    user_photo: './../../assets/img/subscribers/user-8.png',
    user_name: 'Janice Campbell',
    user_level: '34'
  },
  {
    user_photo: './../../assets/img/subscribers/user-9.png',
    user_name: 'Laura Lopez',
    user_level: '8'
  }
]