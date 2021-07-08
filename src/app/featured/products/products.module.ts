import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { TumblersComponent } from './tumblers/tumblers.component';
import { MixingGrindingComponent } from './mixing-grinding/mixing-grinding.component';
import { PMHandlingComponent } from './p-m-handling/p-m-handling.component';
import { TransferPumpingComponent } from './transfer-pumping/transfer-pumping.component';
import { DumpersLiftsComponent } from './dumpers-lifts/dumpers-lifts.component';
import { VacuumFeedHoppersComponent } from './vacuum-feed-hoppers/vacuum-feed-hoppers.component';
import { BrineSystemsComponent } from './brine-systems/brine-systems.component';
import { GrindingSeparationComponent } from './grinding-separation/grinding-separation.component';
import { MeatPressComponent } from './meat-press/meat-press.component';
import { CookingComponent } from './cooking/cooking.component';
import { InStockComponent } from './in-stock/in-stock.component';
export * from './products.component';

@NgModule({
    imports: [
        CommonModule
    ],

    exports: [
        ProductsComponent
    ],

    declarations: [
        ProductsComponent,
        TumblersComponent,
        MixingGrindingComponent,
        PMHandlingComponent,
        TransferPumpingComponent,
        DumpersLiftsComponent,
        VacuumFeedHoppersComponent,
        BrineSystemsComponent,
        GrindingSeparationComponent,
        MeatPressComponent,
        CookingComponent,
        InStockComponent
    ]
})

export class ProductsModule {

}