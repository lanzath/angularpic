import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INewUser } from './INewUser';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

const API = environment.apiURI;

@Injectable()
export class SignUpService {

    constructor(private http: HttpClient) { }

    checkUserNameTake(userName: string): Observable<Object> {

        return this.http.get(`${API}/user/exists/${userName}`);
    }

    signup(newUser: INewUser) {
        return this.http.post(`${API}/user/signup`, newUser);
    }
}