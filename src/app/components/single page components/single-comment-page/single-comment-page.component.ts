import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


import {CommentsService} from "../../../services/comments.service";
import {IComment} from "../../../model_inrefaces/comment.interface";

@Component({
  selector: 'app-single-comment-page',
  templateUrl: './single-comment-page.component.html',
  styleUrls: ['./single-comment-page.component.css']
})
export class SingleCommentPageComponent implements OnInit {
comment:IComment
  constructor(private Activatedroute:ActivatedRoute,
              private CoomentsService:CommentsService) { }

  ngOnInit(): void {
    this.Activatedroute.params.subscribe(({id})=>{
      this.CoomentsService.getSingleComment(id).subscribe(comment=>this.comment=comment)
    })
  }

}
