import { Component } from '@angular/core';
import { Todo } from 'src/app/todo';
import { Itodo } from 'src/app/itodo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent {
  todo: Todo[] = [];
  loading: boolean = true;

  constructor(private todoSvc: TodoService) {}

  ngOnInit(): void {
    this.getTodo();
  }

filterArrayPost:Todo[] = [];

  getTodo(): void {
    this.todoSvc.getTodo().then((todoRes) => {
      this.todo = todoRes;
      this.loading = false;
      this.filterArrayPost = todoRes.filter((res) => res.completed === false);
    });
  }

todo:Todo = new Todo('', false);

  addTodo(aggiungi:Todo) {
    this.todoSvc.addTodo(this.todo).then((todoRes) => {
      console.log(todoRes)
      this.getTodo();
    });
  }
}

update(todo: Todo) {
  this.todoSvc.updateTodo(todo);
};

deleteTodo(todo: Todo) {
  this.todoSvc.updateTodo(todo);
  setTimeout(() => {this.getTodo()}, 100);


}

