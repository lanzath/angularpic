import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { IUser } from './IUser';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    // Valor padrão emitido pelo BehaviorSubject é null pois ainda não decodificou o JWT.
    private userSubject = new BehaviorSubject<IUser>(null);
    private userName: string;

    constructor(private tokenService: TokenService) {

        this.tokenService.hasToken() && this.decodeAndNotify();
    }

    setToken(token: string): void {
        this.tokenService.setToken(token);

        this.decodeAndNotify();
    }

    getUser(): Observable<IUser> {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify(): void {
        const token = this.tokenService.getToken();

        const user = jwt_decode(token) as IUser;

        this.userName = user.name;

        this.userSubject.next(user)
    }

    logout(): void {
        this.tokenService.removeToken();

        // Emite um valor null para atualizar o componente header.
        this.userSubject.next(null);
    }

    isLogged(): boolean {
        return this.tokenService.hasToken();
    }

    getUserName(): string {
        return this.userName;
    }
}