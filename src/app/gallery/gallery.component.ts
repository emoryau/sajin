import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture';
import { PictureService } from '../picture.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  pictures: Picture[];

  constructor(private pictureService: PictureService) { }

  ngOnInit() {
    this.getPictures();
  }

  getPictures(): void {
    this.pictureService.getPictures()
      .subscribe(pictures => this.pictures = pictures);
  }
}
