import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';


@NgModule({
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        PhotoDetailsModule,
        CommonModule
    ]
})

export class PhotosModule { }
