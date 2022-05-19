import { Component, OnInit } from '@angular/core';
import {IUser} from "../models";
import {UsersService} from "../service/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:IUser[];
  constructor(private UserServece:UsersService) { }

  ngOnInit(): void {
    this.UserServece.getAllUsers().subscribe(users=>this.users=users)
  }

}
