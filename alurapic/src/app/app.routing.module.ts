import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { LoginGuard } from './core/auth/login.guard';
import { AuthGuard } from './core/auth/auth.guard';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { GlobalErrorComponent } from './errors/global-error-handler/global-error/global-error.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',  // Indica que a rota tem que ser exatamente igual.
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'user/:userName',
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        },
        data: {
            title: 'Timeline'
        }
    },
    {
        path: 'p/add',
        component: PhotoFormComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Photo upload'
        }
    },
    {
        path: 'p/:photoId',
        component: PhotoDetailsComponent,
        data: {
            title: 'Photo detail'
        }
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
        data: {
            title: '404 - Not found'
        }
    },
    {
        path: 'error',
        component: GlobalErrorComponent,
        data: {
            title: 'Error'
        }
    },
    {
        path: '**',
        redirectTo: 'not-found'
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
