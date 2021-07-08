import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header.component';
import { HeaderService } from './services/header.service';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    AutoCompleteModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [HeaderService]
})
export class HeaderModule {}
