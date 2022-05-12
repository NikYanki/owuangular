import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AllService {

constructor(private http: HttpClient) {
}
private mainHttp ='https://jsonplaceholder.typicode.com';
private httpUsers ='/users';
private httpPosts = '/posts';
private httpComments ='/comments'
  getUsers(): Observable<any[]> {
  return this.http
      .get<any[]>(this.mainHttp+this.httpUsers)

  }
  getPosts(): Observable<any[]> {
    return this.http
      .get<any[]>(this.mainHttp+this.httpPosts)

  }
  getComments(): Observable<any[]> {
    return this.http
      .get<any[]>(this.mainHttp+this.httpComments)

  }
}
