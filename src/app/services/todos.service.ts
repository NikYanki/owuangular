import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


import {ITodos} from "../model_inrefaces/todos.Interface";
import {url} from "../configs/Urls";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) {
  }

  getAllTodos(): Observable<ITodos[]> {
    return this.httpClient.get<ITodos[]>(url.mainURL + url.todos)
  }
}
