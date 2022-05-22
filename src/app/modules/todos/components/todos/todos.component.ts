import {Component, OnInit} from '@angular/core';
import {ITodos} from "../../models/todos-interface";
import {TodosService} from "../../service/todos.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ITodos[];

  constructor(private TodosService: TodosService) {
  }

  ngOnInit(): void {
    this.TodosService.getAlltodos().subscribe(todos => this.todos = todos)
  }

}
