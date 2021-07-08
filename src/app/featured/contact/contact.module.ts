import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { SalesSupportComponent } from './sales-support/sales-support.component';
export * from './contact.component';

@NgModule({
  imports: [CommonModule],

  exports: [ContactComponent],

  declarations: [ContactComponent, SalesSupportComponent],
})
export class ContactModule {}
