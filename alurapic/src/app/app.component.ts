import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    photos = [
        {
            url: 'https://img.wattpad.com/cover/192306297-256-k724565.jpg',
            description: 'anai'
        },
        {
            url: 'https://ami.animecharactersdatabase.com/uploads/chars/67712-27142636.png',
            description: 'resasuke'
        }
    ];

}
