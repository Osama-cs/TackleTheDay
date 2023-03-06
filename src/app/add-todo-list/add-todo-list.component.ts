import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-todo-list',
  templateUrl: './add-todo-list.component.html',
  styleUrls: ['./add-todo-list.component.css']
})
export class AddTodoListComponent implements OnInit {


  todoForm = this.formBuilder.group({
    activity: "",
    type: "",
    date: "",
    time: "",
  })


  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
  }

  onSubmit(): void {
    // Process todo data here
    this.todoForm.reset();
  }

}
