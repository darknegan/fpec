import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {}

  getSlideShow() {
    return this.http
      .get<any>('assets/featured/home/slideshow/slide-info.json');
  }

  getEquipment(){
    return this.http
      .get<any>('assets/featured/home/equipment/food-processing-equipment.json');
  }
}
