import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PhotoFormComponent } from './photo-form.component';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { PhotoModule } from '../photo/photo.module';
import { ImmediateClickModule } from '../../shared/directives/immediate-click/immediate-click.module';

@NgModule({
    declarations: [ PhotoFormComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        VMessageModule,
        PhotoModule,
        ImmediateClickModule
     ]
})
export class PhotoFormModule {}
