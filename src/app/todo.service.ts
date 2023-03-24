import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TodoItem } from './todo-item';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoURL = '/api/todos'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient,
    private messageService: MessageService) { }

  getTodos(): Observable<TodoItem[]>{
    return this.httpClient.get<TodoItem[]>(this.todoURL)
    .pipe(
      tap(_ => this.log('fetched todos')),
      catchError(this.handleError<TodoItem[]>('getTodos', []))
    );
  }

  addTodo(todo: TodoItem): Observable<TodoItem> {
    return this.httpClient.post<TodoItem>(this.todoURL, todo, this.httpOptions).pipe(
      tap((newTodo: TodoItem) => this.log('added todo w/ id=${newTodo.id}')),
      catchError(this.handleError<TodoItem>('addTodo'))
    )
  }


  /**
* Handle Http operation that failed.
* Let the app continue.
*
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('TodoService: ${message}')
  }

}
