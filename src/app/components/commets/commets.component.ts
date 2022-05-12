import {Component, OnInit} from '@angular/core';
import {AllService} from "../../services/all.service";
import {IPost} from "../../models/IPost";
import {IComment} from "../../models/IComment";

@Component({
  selector: 'app-commets',
  templateUrl: './commets.component.html',
  styleUrls: ['./commets.component.css']
})
export class CommetsComponent implements OnInit {

  constructor(private commentSrvice: AllService) {
  }

  comments: IComment[] = [];

  ngOnInit(): void {
    this.commentSrvice.getComments().subscribe(commets_responce => this.comments = commets_responce);
  }

}
