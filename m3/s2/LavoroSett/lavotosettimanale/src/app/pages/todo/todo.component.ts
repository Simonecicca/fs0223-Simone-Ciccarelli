import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';
import { Itodo } from 'src/app/itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todo: Itodo[] = [];
  loading: boolean = true;

  constructor(private todoSvc: TodoService) {}

  ngOnInit(): void {
    this.getItodo();
  }

filterArrayPost:Itodo[] = [];

  getItodo(): void {
    this.todoSvc.getTodo().then((todoRes) => {
      this.todo = todoRes;
      this.loading = false;
      this.filterArrayPost = todoRes.filter((res) => res.completed === false);
    });
  }

Itodo: Itodo = new Itodo('', false);

  addItodo() {
    this.todoSvc.addTodo(this.Itodo).then((todoRes) => {
      console.log(todoRes)
      this.getItodo();
    });
  }

  update(todo: Itodo) {
    this.todoSvc.updateTodo(todo);
    setTimeout(() => {this.getItodo()}, 100);
  }

}


