import { Injectable } from '@angular/core';
import { Itodo } from './itodo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl: string = 'http://localhost4200/todo';

  constructor() { }

  getTodo():Promise<Itodo[]>{
    return fetch(this.apiUrl).then(response => response.json());
  }

  addTodo(todo:Itodo){
    return fetch(this.apiUrl,{
      method:'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    }).then(response => response.json());
  }

  updateTodo(todo:Itodo){
    todo.completed =!todo.completed;
    return fetch(this.apiUrl+'/'+todo.id,{
      method:'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    }).then(response => response.json());
  }
}

deleteTodo(todo:Itodo){
  return fetch(this.apiUrl+'/'+todo.id,{
    method:'DELETE',
  }).then(response => response.json());
}
