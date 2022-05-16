import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


import {IComment} from "../model_inrefaces/comment.interface";
import {url} from "../configs/Urls";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) {
  }

  getAllComments(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(url.mainURL + url.comments)
  }

  getSingleComment(id: string): Observable<IComment> {
    return this.httpClient.get<IComment>(url.mainURL + url.comments + `/${id}`)
  }
}
