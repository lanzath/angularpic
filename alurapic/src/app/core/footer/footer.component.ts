import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { IUser } from '../user/IUser';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    user$: Observable<IUser>;
    constructor(private userService: UserService) {}

    ngOnInit() {
        this.user$ = this.userService.getUser();
    }
}