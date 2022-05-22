import {NgModule} from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./ main-components/home-page/home-page.component";


const routes: Routes = [
  {
    path: '', component: HomePageComponent, children: [
      {path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)},
      {path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)},
      {path: 'comments', loadChildren: () => import('./modules/comments/comments.module').then(m => m.CommentsModule)},
      {path: 'todos', loadChildren: () => import('./modules/todos/todos.module').then(m => m.TodosModule)},
      {path: 'albums', loadChildren: () => import('./modules/albums/albums.module').then(m => m.AlbumsModule)},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
