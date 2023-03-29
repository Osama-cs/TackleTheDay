import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-display-todo-list',
  templateUrl: './display-todo-list.component.html',
  styleUrls: ['./display-todo-list.component.css']
})
export class DisplayTodoListComponent implements OnInit {

  todos: TodoItem[] = [];

  constructor(private todoService: TodoService) { }

  getTodos(): void{
    this.todoService.getTodos()
    .subscribe(todos => this.todos = todos)
  }

  ngOnInit(): void {
    this.getTodos();
  }

  delete(todo: TodoItem): void{
    this.todos = this.todos.filter(t => t !== todo);
    this.todoService.deleteTodo(todo.id).subscribe();
  }

}
