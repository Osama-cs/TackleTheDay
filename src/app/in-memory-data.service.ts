import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { TodoItem } from './todo-item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
    const todos = [
      { id: 1, activity: "walk", type: "exercise", date: "23/03/2023", time: "10:05 PM" },
      { id: 2, activity: "did homework", type: "study", date: "25/03/2023", time: "11:00 PM" },
      { id: 3, activity: "went to work", type: "work", date: "27/03/2023", time: "9:05 AM" }
    ];
    return {todos};
  }

  genId(todos: TodoItem[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1: 1;
  }

  constructor() { }
}
