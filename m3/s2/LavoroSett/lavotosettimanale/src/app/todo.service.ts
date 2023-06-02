import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  [x: string]: any;

  apiUrl: string = 'http://localhost:4200/todo';
  allTodo: Todo[] = [];

  constructor() { }

  getTodo():Promise<Todo[]>{
    return fetch(this.apiUrl).then(response => response.json());
  }

  addTodos(goal:Todo):Promise<Todo>{
    return fetch(this.apiUrl,{
      method:'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(goal)
    }).then(response => response.json());
  }

  updateTodo(todo:Todo){
    return fetch(this.apiUrl+'/'+todo.id,{
      method:'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    }).then(response => response.json());
  }
}
