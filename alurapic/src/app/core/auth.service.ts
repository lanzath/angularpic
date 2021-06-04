import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URI = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    authenticate(userName: string, password: string): Observable<Object> {

        return this.http.post(`${API_URI}/user/login`, { userName, password } )
    }
}