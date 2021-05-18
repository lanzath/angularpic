import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/IPhoto';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    photos: Photo[] = [];

    constructor(private photoService: PhotoService) {

    }

    ngOnInit() {

        this.photoService
            .listFromUser('lanza')
            .subscribe(photos => this.photos = photos);
    }
}
