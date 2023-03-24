import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../todo.service';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-add-todo-list',
  templateUrl: './add-todo-list.component.html',
  styleUrls: ['./add-todo-list.component.css']
})
export class AddTodoListComponent implements OnInit {

  todos: TodoItem[] = [];


  todoForm = this.formBuilder.group({
    activity: "",
    type: "",
    date: "",
    time: "",
  })


  constructor(private formBuilder: FormBuilder, private todoService: TodoService) { }

  ngOnInit() {
  }

  add(activity: string, type: string, date: string, time: string): void {
    activity = activity.trim();
    type = type.trim();
    if (!activity && !type && !date && !time) { return; }
    this.todoService.addTodo({ activity } as TodoItem)
      .subscribe(todo => {
        this.todos.push(todo);
      })
  }

  onSubmit(): void {
    // Process todo data here
    this.todoForm.reset();
  }

}
