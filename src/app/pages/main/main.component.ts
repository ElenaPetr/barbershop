import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  services = [
    {
      name: 'Coloring',
      description: 'Ut enim ad minim veniam, quis trud exercitation...',
      img: 's1.png'
    },
    {
      name: 'Hairstyle',
      description: 'Nemo enim ipsam voluptatem quia voluptas',
      img: 's3.png'
    },
    {
      name: 'Haircut',
      description: 'Consectetur adipisicing elit, sed doe eiusmod',
      img: 's4.png'
    },
    {
      name: 'Coloring',
      description: 'Ut enim ad minim veniam, quis trud exercitation...',
      img: 's1.png'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
