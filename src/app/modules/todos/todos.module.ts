import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodosRoutingModule} from './todos-routing.module';
import {TodosComponent} from './components/todos/todos.component';
import {TodosService} from "./service/todos.service";


@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
  ]
})
export class TodosModule {
}
