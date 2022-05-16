import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";


import {ITodos} from "../../../model_inrefaces/todos.Interface";

@Component({
  selector: 'app-single-todo-page',
  templateUrl: './single-todo-page.component.html',
  styleUrls: ['./single-todo-page.component.css']
})
export class SingleTodoPageComponent implements OnInit {
todo:ITodos
  constructor(private ActivatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(value => {
      let {state:{data}}=history;
      this.todo=data as ITodos
    })
  }

}
