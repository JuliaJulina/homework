import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  records = records;

  constructor() { }

  ngOnInit() {
  }

}


const records = [
  {
    image: './../../assets/img/records/record-img-1.jpg',
    date: 'oct 12, 2018',
    channel_icon: './../../assets/img/records/channel-icon-1.jpg',
    video_name: 'NaVi vs. Team Liquid',
    channel_name: 'Channel name',
    watchers: '423 987',
    time: '2:30:56',
    categories: {
      category1: 'For all' 
    }
  },
  {
    image: './../../assets/img/records/record-img-2.jpg',
    date: 'oct 12, 2018',
    channel_icon: './../../assets/img/records/channel-icon-2.jpg',
    video_name: 'NaVi vs. Team Liquid [Inferno] Map 2 - Semi Final',
    channel_name: 'Channel name',
    watchers: '423 987',
    time: '2:30:56',
    categories: {
      category1: 'Just Chatting'
    }
  },
  {
    image: './../../assets/img/records/record-img-3.jpg',
    date: 'oct 12, 2018',
    channel_icon: './../../assets/img/records/channel-icon-3.jpg',
    video_name: 'New game on PS',
    channel_name: 'Channel name',
    watchers: '423 987',
    time: '2:30:56',
    categories: {
      category1: 'Premium only'   
    } 
  },
  {
    image: './../../assets/img/records/record-img-4.jpg',
    date: 'oct 12, 2018',
    channel_icon: './../../assets/img/records/channel-icon-1.jpg',
    video_name: 'Stream name Forza new game',
    channel_name: 'Channel name',
    watchers: '423 987',
    time: '2:30:56',
    categories: {
      category1: 'Just Chatting'
    }
  },
  {
    image: './../../assets/img/records/record-img-5.jpg',
    date: 'oct 12, 2018',
    channel_icon: './../../assets/img/records/channel-icon-1.jpg',
    video_name: 'Escape from Tarkov - go go now',
    channel_name: 'Channel name',
    watchers: '423 987',
    time: '2:30:56',
    categories: {
      category1: 'New games'
    }
  },
  {
    image: './../../assets/img/records/record-img-6.jpg',
    date: 'oct 12, 2018',
    channel_icon: './../../assets/img/records/channel-icon-2.jpg',
    video_name: 'Spider-man OMG that game',
    channel_name: 'Channel name',
    watchers: '423 987',
    time: '2:30:56',
    categories: {
      category1: 'New games'
    }
  },
  {
    image: './../../assets/img/records/record-img-7.jpg',
    date: 'oct 12, 2018',
    channel_icon: './../../assets/img/records/channel-icon-3.jpg',
    video_name: 'Call of Duty Blck Opps',
    channel_name: 'Channel name',
    watchers: '423 987',
    time: '2:30:56',
    categories: {
      category1: 'New games',
      category2:'Premium only'
    }
  },
  {
    image: './../../assets/img/records/record-img-8.jpg',
    date: 'oct 12, 2018',
    channel_icon: './../../assets/img/records/channel-icon-1.jpg',
    video_name: 'NaVi vs. Team Liquid',
    channel_name: 'Channel name',
    watchers: '423 987',
    time: '2:30:56',
    categories: {
      category1: 'Premium only'
    }
  },
]