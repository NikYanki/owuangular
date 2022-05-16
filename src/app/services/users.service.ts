import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


import {IUser} from "../model_inrefaces/user.interface";
import {url} from "../configs/Urls";
import {ISingleUser} from "../model_inrefaces/single_user.interface";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(url.mainURL + url.users);
  }

  getSingleUser(id: string): Observable<ISingleUser> {
    return this.httpClient.get<ISingleUser>(url.mainURL + url.users + `/${id}`)
  }
}
