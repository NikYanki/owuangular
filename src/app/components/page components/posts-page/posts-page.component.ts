import { Component, OnInit } from '@angular/core';


import {PostsService} from "../../../services/posts.service";
import {IPost} from "../../../model_inrefaces/post.interface";

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {

posts:IPost[];

  constructor(private PostService:PostsService) {
    PostService.getAllPosts().subscribe(posts=>this.posts=posts)
  }

  ngOnInit(): void {
  }

}
