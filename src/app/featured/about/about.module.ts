import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
export * from './about.component';

@NgModule({
    imports: [
        CommonModule
    ],

    exports: [
        AboutComponent
    ],

    declarations: [
        AboutComponent
    ]
})

export class AboutModule {

}