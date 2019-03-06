import { Component, OnInit } from '@angular/core';
import { TileService } from '../tile.service';
import { Tile } from '../tile';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  tiles: Tile[];

  constructor(private tileService: TileService) { }

  ngOnInit() {
    this.getTiles();
  }

  getTiles(): void {
    this.tileService.getTiles()
      .subscribe(tiles => this.tiles = tiles);
  }
}
