import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {TodosService} from "./service/todos.service";
import {TodosComponent} from "./components/todos/todos.component";

const routes: Routes = [{path: '', component: TodosComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [TodosService]
})
export class TodosRoutingModule {
}
