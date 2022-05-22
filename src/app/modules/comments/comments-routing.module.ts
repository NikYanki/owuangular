import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentsComponent} from "./components/comments/comments.component";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path:'',component:CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
