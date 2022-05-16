import {Component, OnInit} from '@angular/core';


import {UsersService} from "../../../services/users.service";
import {IUser} from "../../../model_inrefaces/user.interface";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  users: IUser[]

  constructor(private UsersService: UsersService) {
    UsersService.getAllUsers().subscribe(users => this.users = users)
  }

  ngOnInit(): void {
  }

}
