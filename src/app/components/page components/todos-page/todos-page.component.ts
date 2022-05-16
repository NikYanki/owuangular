import { Component, OnInit } from '@angular/core';


import {ITodos} from "../../../model_inrefaces/todos.Interface";
import {TodosService} from "../../../services/todos.service";

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css']
})
export class TodosPageComponent implements OnInit {

  todos:ITodos[]

  constructor(private TodosService:TodosService) {
    TodosService.getAllTodos().subscribe(todos=>this.todos=todos)
  }

  ngOnInit(): void {
  }

}
