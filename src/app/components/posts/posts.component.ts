import { Component, OnInit } from '@angular/core';
import {AllService} from "../../services/all.service";
import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: AllService) { }

  posts:IPost[] = [];
  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts_response => this.posts=posts_response)
  }

}
