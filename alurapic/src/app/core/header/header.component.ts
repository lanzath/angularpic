import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../user/IUser';
import { UserService } from '../user/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    // Por convenção utiliza-se o $ para indicar que a propriedade vai receber um Observable.
    user$: Observable<IUser>;

    constructor(private userService: UserService, private router: Router) {
        this.user$ = userService.getUser();
    }

    logout() {
        this.userService.logout();

        this.router.navigate(['']);
    }
}