import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { PhotoService } from '../photo/photo.service';
import { Photo } from './../photo/IPhoto';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

    photos: Photo[] = [];
    filter: string = '';
    debounce: Subject<string> = new Subject<string>();
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

        // Se inscreve no valor emitido ao Subject e aplica um debounce de 300ms.
        this.debounce
            .pipe(debounceTime(300))
            .subscribe(filter => this.filter = filter);
    }

    // No fim do ciclo de vida do component, cancela o subscribe no debounce.
    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }

    load() {
        this
            .photoService.listFromUserPaginated(this.userName, ++this.currentPage) // pré incremento em currentPage
            .subscribe(photos => {
                this.photos = this.photos.concat(photos);
                if (!photos.length) this.hasMore = false;
            });
    }
}
