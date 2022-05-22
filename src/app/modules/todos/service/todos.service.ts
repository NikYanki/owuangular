import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITodos} from "../models/todos-interface";
import {urls} from "../../../../configs";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private HttpClient: HttpClient) {
  }

  getAlltodos(): Observable<ITodos[]> {
    return this.HttpClient.get<ITodos[]>(urls.todos);
  }

  getSingleTodo(Id: string): Observable<ITodos> {
    return this.HttpClient.get<ITodos>(urls.todos + `/${Id}`)
  }
}
