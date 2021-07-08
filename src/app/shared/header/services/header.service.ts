import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Injectable()
export class HeaderService {

  constructor(private http: HttpClient) {}

  getNavbar() {
    return this.http
      .get<any>('assets/navbar/navbar.json')
      .toPromise()
      .then((res) => <MenuItem[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
