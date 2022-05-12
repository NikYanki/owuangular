import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {AllService} from "../../services/all.service";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: AllService) {
  }

  users: IUser[] = [];



  ngOnInit(): void {
   this.userService.getUsers().subscribe(users_responce =>this.users=users_responce);
  }


}
