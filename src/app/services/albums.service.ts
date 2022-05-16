import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


import {IAlbums} from "../model_inrefaces/albums.interface";
import {url} from "../configs/Urls";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private httpClient: HttpClient) {
  }

  getAllAlbums(): Observable<IAlbums[]> {
    return this.httpClient.get<IAlbums[]>(url.mainURL + url.albums)
  }
}
