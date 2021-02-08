import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/header/header.module';
import { HomeModule } from './featured/home/home.module';
import { ProductsModule } from './featured/products/products.module';
import { ReplacementPartsModule } from './featured/replacement-parts/replacement-parts.module';
import { VideoGalleryModule } from './featured/video-gallery/video-gallery.module';
import { ContactModule } from './featured/contact/contact.module';
import { AutomationModule } from './featured/automation/automation.module';
import { FooterModule } from './shared/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    ProductsModule,
    ReplacementPartsModule,
    VideoGalleryModule,
    ContactModule,
    AutomationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
