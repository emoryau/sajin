import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  pictures: Picture[] = [
    {
      id: 1,
      caption: 'Picture 1',
      date: '1/1/2011',
      imgSrc: 'http://goo.gl/vyAs27'
    },
    {
      id: 2,
      caption: 'Picture 2',
      date: '1/1/2011',
      imgSrc: 'http://goo.gl/vyAs27'
    },
    {
      id: 3,
      caption: 'Picture 3',
      date: '1/1/2011',
      imgSrc: 'http://goo.gl/vyAs27'
    },
    {
      id: 4,
      caption: 'Picture 4',
      date: '1/1/2011',
      imgSrc: 'http://goo.gl/vyAs27'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
