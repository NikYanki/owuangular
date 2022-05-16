import {Routes} from "@angular/router";


import {HomePageComponent} from "../components/page components/home-page/home-page.component";
import {UsersPageComponent} from "../components/page components/users-page/users-page.component";
import {PostsPageComponent} from "../components/page components/posts-page/posts-page.component";
import {CommentsPageComponent} from "../components/page components/comments-page/comments-page.component";
import {TodosPageComponent} from "../components/page components/todos-page/todos-page.component";
import {AlbumsPageComponent} from "../components/page components/albums-page/albums-page.component";
import {SingleUserPageComponent} from "../components/single page components/single-user-page/single-user-page.component";
import {SinglePostPageComponent} from "../components/single page components/single-post-page/single-post-page.component";
import {SingleCommentPageComponent} from "../components/single page components/single-comment-page/single-comment-page.component";
import {SingleTodoPageComponent} from "../components/single page components/single-todo-page/single-todo-page.component";
import {SingleAlbumPageComponent} from "../components/single page components/single-album-page/single-album-page.component";


export const routes: Routes = [
  {
    path: 'home', component: HomePageComponent,
    children: [
      {path: 'users', component: UsersPageComponent},
      {path: 'posts', component: PostsPageComponent},
      {path: 'comments', component: CommentsPageComponent},
      {path: 'todos', component: TodosPageComponent},
      {path: 'albums', component: AlbumsPageComponent}
    ],
  },
  {path: 'home/users/user/:id', component: SingleUserPageComponent},
  {path: 'home/posts/post/:id', component: SinglePostPageComponent},
  {path: 'home/comments/comment/:id', component: SingleCommentPageComponent},
  {path: 'home/todos/todo/:id', component: SingleTodoPageComponent},
  {path: 'home/albums/album/:id', component: SingleAlbumPageComponent}
]
