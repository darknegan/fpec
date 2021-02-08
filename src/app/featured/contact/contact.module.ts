import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
export * from './contact.component';

@NgModule({
  imports: [CommonModule],

  exports: [ContactComponent],

  declarations: [ContactComponent],
})
export class ContactModule {}
