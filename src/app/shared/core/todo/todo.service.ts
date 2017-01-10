
import { Injectable } from '@angular/core';

/**
 * Polyfill
 */
import { Observable, BehaviorSubject } from 'rxjs';

/**
 * Models
 */
import { Todo } from './todo.model';

@Injectable()
export class TodoService {

    private _todos: BehaviorSubject<Todo[]>;

    constructor() {
        console.log("Estoy en todo Service!");

        this._todos = new BehaviorSubject<Todo[]>([]);
    }


    getTodos() {
        return this._todos;
    }
    addTodo(todo: Todo) {
        this._todos.take(1).subscribe((todos: Todo[]) => {
            this._todos.next([...todos, todo]);
        })
    }
    removeTodo(todoName: string) {
        this._todos.subscribe((todos: Todo[]) => {
            this._todos.next([...todos.filter((todo: Todo) => todo.name != todoName)]);
        })
    }
    completeTodo(todoName: string) {
        this._todos.subscribe((todos: Todo[]) => {
            this._todos.next([...todos.map((todo: Todo) => {
                if (todo.name == todoName) {
                    return Object.assign({}, todo, { completed: true })
                } else {
                    return todo;
                }
            })])
        })
    }
    doneTodo(todoName: string) {
        this._todos.subscribe((todos: Todo[]) => {
            this._todos.next([...todos.map((todo: Todo) => {
                if (todo.name == todoName) {
                    return Object.assign({}, todo, { done: true });
                } else {
                    todo;
                }
            })])
        })
    }
}