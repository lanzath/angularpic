import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const API_URI = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private userService: UserService
    ) { }

    authenticate(userName: string, password: string) {

        // Faz uma request http para se autenticar no back-end
        // o pipe vai executar alguma ação antes de devolver a resposta a quem fizer o subscribe
        // tap vai pegar os dados que estão no headers da requisição, por isso o terceiro parâmetro do método post.
        return this.http
            .post(`${API_URI}/user/login`, { userName, password }, { observe: 'response' } )
            .pipe(tap(res => {
                const authToken = res.headers.get('x-access-token');
                this.userService.setToken(authToken);
                console.log(`User ${userName} authenticated with ${authToken}`);
            }));
    }
}