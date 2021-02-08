import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { HomeService } from './services/home.service';
import { Slide } from './model/home-interface';
import { Equipment } from './model/home-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slides$: Observable<Slide[]>;
  equipment$: Observable<Equipment[]>;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.slides$ = this.homeService.getSlideShow().pipe(
      map((res) => {
        return res.data;
      })
    );

    this.equipment$ = this.homeService.getEquipment().pipe(
      map((res) => {
        return res.data;
      })
    );
  }
}
