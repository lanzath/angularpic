import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from './../photo/IPhoto';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

    photos: Photo[] = [];
    filter: string = '';

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        // Atribui a photos os dados gerados pelo Resolver antes da inicialização do componente.
        this.photos = this.activatedRoute.snapshot.data['photos'];
    }
}
