import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer.component';

import { PanelModule } from 'primeng/panel';


@NgModule({
  imports: [CommonModule, HttpClientModule, PanelModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
  providers: [],
})
export class FooterModule {}
