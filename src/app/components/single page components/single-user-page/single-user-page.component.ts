import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";


import {UsersService} from "../../../services/users.service";
import {ISingleUser} from "../../../model_inrefaces/single_user.interface";

@Component({
  selector: 'app-single-user-page',
  templateUrl: './single-user-page.component.html',
  styleUrls: ['./single-user-page.component.css']
})
export class SingleUserPageComponent implements OnInit {
  id: any
  user: ISingleUser

  constructor(private ActivatedRoute: ActivatedRoute,
              private UsersService: UsersService) {}

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(({id}) => {
      this.UsersService.getSingleUser(id).subscribe(user=>this.user=user)
    })

  }

}
