import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../../../../configs";
import {IPost} from "../models/post-interface";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private HttpClient: HttpClient) {

  }

  getAllPosrs(): Observable<IPost[]> {
    return this.HttpClient.get<IPost[]>(urls.posts)
  }

  getSinglePost(Id: string): Observable<IPost> {
    return this.HttpClient.get<IPost>(urls.posts + '/' + Id)
  }
}
