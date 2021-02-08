import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export * from './home.component';
import { HomeComponent } from './home.component';
import { HomeService } from './services/home.service';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PanelModule,
    DataViewModule
  ],

  exports: [HomeComponent],

  declarations: [HomeComponent],
  providers: [HomeService],
})
export class HomeModule {}
