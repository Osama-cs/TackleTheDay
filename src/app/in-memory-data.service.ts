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
      { id: 1, activity: "walk", type: "Exercising", date: "23-03-2023", time: "22:05" },
      { id: 2, activity: "did homework", type: "Studying", date: "25-03-2023", time: "23:00" },
      { id: 3, activity: "went to work", type: "Working", date: "27-03-2023", time: "09:05" }
    ];
    return {todos};
  }

  genId(todos: TodoItem[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1: 1;
  }

  constructor() { }
}
