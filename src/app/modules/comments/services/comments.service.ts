import { Injectable } from '@angular/core';
import {HttpClient, } from "@angular/common/http";
import {IComment} from "../models/comment-interface";
import {urls} from "../../../../configs";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private HttpClient:HttpClient) { }
getAllComments():Observable<IComment[]>{
    return this.HttpClient.get<IComment[]>(urls.comments)
}
  getSingleComments(Id:string):Observable<IComment>{
    return this.HttpClient.get<IComment>(urls.comments+'/'+Id)
  }
}
