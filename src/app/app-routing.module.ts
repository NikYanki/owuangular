import {NgModule} from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./ main-components/home-page/home-page.component";

const routes: Routes = [
  {
    path: '', component: HomePageComponent, children:[
      {path: 'users', loadChildren:()=>import('./modules/users/users.module').then(m=>m.UsersModule)}
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
