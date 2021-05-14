import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    photos: Object[] = [];

    constructor(http: HttpClient) {

        // O HttpClient semprse devolverá um Observable
        // É necesário que o componente esteja inscrito (subscribe()) no observable para obter o return
        // Utilizado explicit casting do typescript para garantir que o que será trazido pelo http.get será um array de objetos.
        http
            .get<Object[]>('http://localhost:3000/lanza/photos')
            .subscribe(
                photos => this.photos = photos,
                err => console.log(err.message)
            );
    }


}
