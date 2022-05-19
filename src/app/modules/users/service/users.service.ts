import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../../../../configs";
import {IUser} from "../models";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private HttpClient: HttpClient) {

  }

  getAllUsers(): Observable<IUser[]> {
    return this.HttpClient.get<IUser[]>(urls.users)
  }

  getSingleUser(Id: string): Observable<IUser> {
    return this.HttpClient.get<IUser>(urls.users + '/' + Id)
  }
}
