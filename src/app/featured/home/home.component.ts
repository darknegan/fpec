import { Component, OnInit } from '@angular/core';

import { HomeService } from './services/home.service';
import { Slide } from './model/home.interface';
import { Equipment } from './model/home.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slides: Slide[];
  equipment: Equipment[];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getSlideShow().subscribe((slideData: Slide[]) => {
      this.slides = slideData;
    });

    this.homeService.getEquipment().subscribe((equipmentData: Equipment[]) => {
      this.equipment = equipmentData;
    });
  }
}
