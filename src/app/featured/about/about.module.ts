import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export * from './about.component';
import { AboutComponent } from './about.component';

import { PanelModule } from 'primeng/panel';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PanelModule,
  ],

  exports: [AboutComponent],

  declarations: [AboutComponent],
})
export class AboutModule {}