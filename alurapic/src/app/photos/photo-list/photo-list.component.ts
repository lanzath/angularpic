import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from './../photo/IPhoto';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

    photos: Photo[] = [];
    filter: string = '';
    hasMore: boolean = true;
    currentPage: number = 1;
    userName: string = '';

    constructor(
        private activatedRoute: ActivatedRoute,
        private photoService: PhotoService
    ) {}

    ngOnInit(): void {
        this.userName = this.activatedRoute.snapshot.params.userName;

        // Atribui a photos os dados gerados pelo Resolver antes da inicialização do componente.
        this.photos = this.activatedRoute.snapshot.data['photos'];
    }

    load() {
        this
            .photoService.listFromUserPaginated(this.userName, ++this.currentPage) // pré incremento em currentPage
            .subscribe(photos => {
                this.filter = '';
                this.photos = this.photos.concat(photos);
                if (!photos.length) this.hasMore = false;
            });
    }
}
