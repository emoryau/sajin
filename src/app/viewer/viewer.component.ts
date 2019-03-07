import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Picture} from '../picture';
import {TileService} from '../tile.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  picture: Picture;

  constructor(private route: ActivatedRoute, private pictureService: TileService) {
    console.log(route);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        this.id = +params.id;
        this.pictureService.getPicture(this.id)
            .subscribe(picture => this.picture = picture);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
