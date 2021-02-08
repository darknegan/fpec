import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AutomationComponent } from './automation.component';
export * from './automation.component';

@NgModule({
    imports: [
        CommonModule
    ],

    exports: [
        AutomationComponent
    ],

    declarations: [
        AutomationComponent
    ]
})

export class AutomationModule {

}