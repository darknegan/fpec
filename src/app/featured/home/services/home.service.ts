import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipment, Slide } from '../model/home-interface';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {}

  getSlideShow(): Observable<Slide[]> {
    return this.http
      .get<any>('assets/featured/home/slideshow/slide-info.json');
  }

  getEquipment(): Observable<Equipment[]> {
    return this.http
      .get<any>('assets/featured/home/equipment/food-processing-equipment.json');
  }
}
