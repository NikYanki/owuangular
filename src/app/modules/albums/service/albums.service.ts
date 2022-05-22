import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAlbums} from "../models/albums-interface";
import {urls} from "../../../../configs";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private HttpClient: HttpClient) {
  }

  getAllAlbums(): Observable<IAlbums[]> {
    return this.HttpClient.get<IAlbums[]>(urls.albums)
  }

  getSingleAlbum(Id: string): Observable<IAlbums> {
    return this.HttpClient.get<IAlbums>(urls.albums + `/${Id}`)
  }
}
