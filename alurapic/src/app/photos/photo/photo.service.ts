import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from './IPhoto';

const API = 'http://localhost:3000';

// O decorator Injectable permite que a classe seja injetada em toda a aplicação (providedIn root)
@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) {}

    // O HttpClient sempre devolverá um Observable
    // Utilizado explicit casting do typescript para garantir que o que será trazido pelo http.get será um array de objetos.
    listFromUser(userName: string) {
        return this.http
                .get<Photo[]>(`${API}/${userName}/photos`);
    }
}
