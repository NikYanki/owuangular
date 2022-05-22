import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../service/posts.service";
import {IPost} from "../../models/post-interface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:IPost[];

  constructor(private PostsService:PostsService) { }

  ngOnInit(): void {
    this.PostsService.getAllPosrs().subscribe(posts=>this.posts=posts)
  }

}
