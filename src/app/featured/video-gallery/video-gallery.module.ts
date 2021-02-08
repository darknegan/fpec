import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VideoGalleryComponent } from './video-gallery.component';
export * from './video-gallery.component';

@NgModule({
    imports: [
        CommonModule
    ],

    exports: [
        VideoGalleryComponent
    ],

    declarations: [
        VideoGalleryComponent
    ]
})

export class VideoGalleryModule {

}