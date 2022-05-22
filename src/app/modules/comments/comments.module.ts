import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentsService} from "./services/comments.service";
import {HttpClientModule} from "@angular/common/http";
import {CommentsComponent} from "./components/comments/comments.component";


@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentsService
  ]
})
export class CommentsModule {
}
