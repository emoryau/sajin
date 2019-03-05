import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Picture } from './picture';
import { PICTURES } from './mock-pictures';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor() { }

  getPictures(): Observable<Picture[]> {
    return of(PICTURES);
  }
}
