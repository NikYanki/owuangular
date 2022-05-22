import { Component, OnInit } from '@angular/core';
import {IComment} from "../../models/comment-interface";
import {CommentsService} from "../../services/comments.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[];
  constructor(private CommentsService:CommentsService) { }

  ngOnInit(): void {
    this.CommentsService.getAllComments().subscribe(components =>this.comments=components)
  }

}
