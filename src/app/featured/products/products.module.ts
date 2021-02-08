import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
export * from './products.component';

@NgModule({
    imports: [
        CommonModule
    ],

    exports: [
        ProductsComponent
    ],

    declarations: [
        ProductsComponent
    ]
})

export class ProductsModule {

}