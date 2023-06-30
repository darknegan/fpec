import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './featured/home/home.component';
import { AboutComponent } from './featured/about/about.component';
import { ProductsComponent } from './featured/products/products.component';
import { AutomationComponent } from './featured/automation/automation.component';
import { ReplacementPartsComponent } from './featured/replacement-parts/replacement-parts.component';
import { VideoGalleryComponent } from './featured/video-gallery/video-gallery.component';
import { ContactComponent } from './featured/contact/contact.component';
import { TumblersComponent } from './featured/products/tumblers/tumblers.component';
import { MixingGrindingComponent } from './featured/products/mixing-grinding/mixing-grinding.component';
import { PMHandlingComponent } from './featured/products/p-m-handling/p-m-handling.component';
import { TransferPumpingComponent } from './featured/products/transfer-pumping/transfer-pumping.component';
import { CookingComponent } from './featured/products/cooking/cooking.component';
import { DumpersLiftsComponent } from './featured/products/dumpers-lifts/dumpers-lifts.component';
import { GrindingSeparationComponent } from './featured/products/grinding-separation/grinding-separation.component';
import { VacuumFeedHoppersComponent } from './featured/products/vacuum-feed-hoppers/vacuum-feed-hoppers.component';
import { BrineSystemsComponent } from './featured/products/brine-systems/brine-systems.component';
import { MeatPressComponent } from './featured/products/meat-press/meat-press.component';
import { InStockComponent } from './featured/products/in-stock/in-stock.component';
import { SalesSupportComponent } from './featured/contact/sales-support/sales-support.component';

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
    path: 'products/tumblers',
    component: TumblersComponent,
  },
  {
    path: 'products/mixing-grinding',
    component: MixingGrindingComponent,
  },
  {
    path: 'products/p-m-handling',
    component: PMHandlingComponent,
  },
  {
    path: 'products/transfer-pumping',
    component: TransferPumpingComponent,
  },
  {
    path: 'products/cooking',
    component: CookingComponent,
  },
  {
    path: 'products/dumpers-lifts',
    component: DumpersLiftsComponent,
  },
  {
    path: 'products/grinding-separation',
    component: GrindingSeparationComponent,
  },
  {
    path: 'products/vacuum-feed-hoppers',
    component: VacuumFeedHoppersComponent,
  },
  {
    path: 'products/brine-systems',
    component: BrineSystemsComponent,
  },
  {
    path: 'products/meat-press',
    component: MeatPressComponent,
  },
  {
    path: 'products/in-stock',
    component: InStockComponent,
  },
  {
    path: 'products/sales-support',
    component: SalesSupportComponent,
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
