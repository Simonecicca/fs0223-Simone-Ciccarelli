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

  update(todo: Todo) {
    this.todoSvc.updateTodo(todo);
  };


  deleteTodo(todo: Todo) {
    this.todoSvc.updateTodo(todo);
    setTimeout(() => {this.getItodo()}, 100);

}

}

