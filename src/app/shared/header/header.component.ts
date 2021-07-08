import { Component, OnInit } from '@angular/core';
import { HeaderService } from './services/header.service';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navbar: MenuItem[];

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.getNavbar().then((navbar) => {
      this.navbar = navbar;
    });
  }

  search(event) {
    // this.mylookupservice.getResults(event.query).then((data) => {
    //   this.results = data;
    // });
  }
}
