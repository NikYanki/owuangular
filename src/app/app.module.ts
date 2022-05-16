import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import { HomePageComponent } from './components/page components/home-page/home-page.component';
import {routes } from './routes/routes'
import { UsersPageComponent } from './components/page components/users-page/users-page.component';
import { PostsPageComponent } from './components/page components/posts-page/posts-page.component';
import { CommentsPageComponent } from './components/page components/comments-page/comments-page.component';
import { TodosPageComponent } from './components/page components/todos-page/todos-page.component';
import { AlbumsPageComponent } from './components/page components/albums-page/albums-page.component';
import { SingleUserPageComponent } from './components/single page components/single-user-page/single-user-page.component';
import { SinglePostPageComponent } from './components/single page components/single-post-page/single-post-page.component';
import { SingleCommentPageComponent } from './components/single page components/single-comment-page/single-comment-page.component';
import { SingleTodoPageComponent } from './components/single page components/single-todo-page/single-todo-page.component';
import { SingleAlbumPageComponent } from './components/single page components/single-album-page/single-album-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UsersPageComponent,
    PostsPageComponent,
    CommentsPageComponent,
    TodosPageComponent,
    AlbumsPageComponent,
    SingleUserPageComponent,
    SinglePostPageComponent,
    SingleCommentPageComponent,
    SingleTodoPageComponent,
    SingleAlbumPageComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
