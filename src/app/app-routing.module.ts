import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './featured/home/home.component';
import { AboutComponent } from './featured/about/about.component';
import { ProductsComponent } from './featured/products/products.component';
import { AutomationComponent } from './featured/automation/automation.component';
import { ReplacementPartsComponent } from './featured/replacement-parts/replacement-parts.component';
import { VideoGalleryComponent } from './featured/video-gallery/video-gallery.component';
import { ContactComponent } from './featured/contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'automation',
    component: AutomationComponent,
  },
  {
    path: 'replacement-parts',
    component: ReplacementPartsComponent,
  },
  {
    path: 'video-gallery',
    component: VideoGalleryComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
