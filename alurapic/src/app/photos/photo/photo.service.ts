import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Photo } from './IPhoto';
import { PhotoComments } from '../photo-details/photo-comments/IPhotoComment';

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

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams().append('page', page.toString())
        return this.http
                .get<Photo[]>(`${API}/${userName}/photos`, { params });
                // se uma chave tem o mesmo nome do valor não é necessário passar o valor { params: params }
    }

    upload(description: string, allowComments: boolean, file: File) {
        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false');
        formData.append('imageFile', file);

        return this.http.post(`${API}/photos/upload`, formData);
    }

    findById(id: number) {
        return this.http.get<Photo>(`${API}/photos/${id}`);
    }

    getComments(photoId: number) {
        return this.http.get<PhotoComments[]>(`${API}/photos/${photoId}/comments`);
    }

    addComment(photoId: number, commentText: string) {
        return this.http.post(`${API}/photos/${photoId}/comments`, { commentText });
    }

    removePhoto(photoId: number) {
        return this.http.delete(`${API}/photos/${photoId}`);
    }

    like(photoId: number): Observable<boolean> {
        // retorna status 200|304
        return this.http.post(`${API}/photos/${photoId}/like`, {}, { observe: 'response' })
          .pipe(map(res => true))
          .pipe(catchError(err => {
              // Se status for 304, retorna um observable do tipo false, senão devolve o erro
              return err.status == '304' ? of(false) : throwError(err);
          }));
    }
}