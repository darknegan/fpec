import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReplacementPartsComponent } from './replacement-parts.component';
export * from './replacement-parts.component';

@NgModule({
    imports: [
        CommonModule
    ],

    exports: [
        ReplacementPartsComponent
    ],

    declarations: [
        ReplacementPartsComponent
    ]
})

export class ReplacementPartsModule {

}