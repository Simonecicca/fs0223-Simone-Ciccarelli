import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todo: Todo[] = [];
  loading: boolean = false;

  constructor(private todoSvc: TodoService) {}

  ngOnInit(): void {
    this.getTodo();
  }

filterArrayPost:Todo[] = [];

  getTodo(): void {
    this.todoSvc.getTodo().then((todoRes) => {
      this.todo = todoRes;
      this.loading = false;
      todoRes.filter(() => {
        }).forEach((todoResFilter) => {
          if (todoResFilter.completed == false) {
            this.filterArrayPost.push(todoResFilter);
          }
        })
    });
  }


  addTodo(aggiungi:Todo) {
    this.todoSvc.addTodo(aggiungi).then((todoRes) => {
      todoRes.completed = !todoRes.completed;
    });
  }
}
