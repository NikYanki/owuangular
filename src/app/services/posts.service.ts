import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


import {IPost} from "../model_inrefaces/post.interface";
import {url} from "../configs/Urls";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(url.mainURL+url.posts)
  }
  getSinglePost(id:string):Observable<IPost>{
    return this.httpClient.get<IPost>(url.mainURL+url.posts+"/"+id)
  }
}
