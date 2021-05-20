import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/IPhoto';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {


    @Input() photos: Photo[] = [];
    rows: any[] = [];

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        // se houver mudança, dinamicamente será adicionado uma prop chamada photos
        if (changes.photos) {
            this.rows = this.groupColumns(this.photos);
        }
    }

    /**
     * Organiza colunas para mostrar de 3 em 3 fotos.
     *
     * @param photos Photo[]
     * @returns newRows []
     */
    groupColumns(photos: Photo[]): any[] {
        const newRows = [];

        for (let index = 0; index < photos.length; index += 3) {
            newRows.push(photos.slice(index, index + 3));
        }
        return newRows;
    }

}
