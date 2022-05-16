import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


import {PostsService} from "../../../services/posts.service";
import {IPost} from "../../../model_inrefaces/post.interface";

@Component({
  selector: 'app-single-post-page',
  templateUrl: './single-post-page.component.html',
  styleUrls: ['./single-post-page.component.css']
})
export class SinglePostPageComponent implements OnInit {
post:IPost
  constructor(private ActivatedRout:ActivatedRoute,
              private PostService:PostsService) { }

  ngOnInit(): void {
    this.ActivatedRout.params.subscribe(({id})=>{
     this.PostService.getSinglePost(id).subscribe(post=>this.post=post)
    })
  }

}
