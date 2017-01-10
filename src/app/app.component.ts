import { Component } from '@angular/core';

import { TodoService } from './shared/core/todo/todo.service';
import { Todo } from './shared/core/todo/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!'
  constructor(
    private todoService: TodoService
  ) {
    console.log("AppComponent Constructor");
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos: Todo[]) => {
      console.log("Todos: " + JSON.stringify(todos, null, 2));
    })

    this.todoService.addTodo({
      name:"task1",
      completed: false,
      done: false
    });

    this.todoService.addTodo({
      name:"task2",
      completed: false,
      done: false
    });

    this.todoService.addTodo({
      name:"task3",
      completed: false,
      done: false
    });
  }
}
