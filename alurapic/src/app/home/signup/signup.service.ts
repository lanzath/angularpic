import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INewUser } from './INewUser';
import { Observable } from 'rxjs';

const API_URI = 'http://localhost:3000'

@Injectable()
export class SignUpService {

    constructor(private http: HttpClient) { }

    checkUserNameTake(userName: string): Observable<Object> {

        return this.http.get(`${API_URI}/user/exists/${userName}`);
    }

    signup(newUser: INewUser) {
        return this.http.post(`${API_URI}/user/signup`, newUser);
    }
}