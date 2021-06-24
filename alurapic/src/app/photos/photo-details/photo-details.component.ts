import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/IPhoto';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './photo-details.component.html',
    styleUrls: ['photo-details.css']
})
export class PhotoDetailsComponent implements OnInit {

    photo$: Observable<Photo>;

    constructor(
        private route: ActivatedRoute,
        private photoService: PhotoService
    ) { }

    ngOnInit() {
        this.photo$ = this.photoService
            .findById(this.route.snapshot.params.photoId);
    }
}