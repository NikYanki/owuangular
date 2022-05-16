import {Component, OnInit} from '@angular/core';


import {CommentsService} from "../../../services/comments.service";
import {IComment} from "../../../model_inrefaces/comment.interface";

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.css']
})
export class CommentsPageComponent implements OnInit {
  comments: IComment[]

  constructor(private CommentsService: CommentsService) {
    this.CommentsService.getAllComments().subscribe(comments => this.comments = comments)
  }

  ngOnInit(): void {
  }

}
