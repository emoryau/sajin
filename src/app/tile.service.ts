import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Picture } from './picture';
import { Tile } from './tile';
import { PICTURES } from './mock-pictures';

@Injectable({
  providedIn: 'root'
})
export class TileService {

  private tilesUrl = 'http://localhost:8080/tiles';

  constructor(
    private http: HttpClient) { }

  getTiles(): Observable<Tile[]> {
    return this.http.get<Tile[]>(this.tilesUrl);
  }

  getPicture(id): Observable<Picture> {
    return of(PICTURES[id]);
  }
}
