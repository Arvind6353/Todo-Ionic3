import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {

  public todos = ['Todo1', 'Todo2'];

  public archivedTodos = [];

  constructor(public http: Http) {
    console.log('Hello TodoProvider Provider');
  }

  getTodos() :string[] {
    return this.todos
  }

  addTodo(todo:string) {
    this.todos.push(todo);
  }

  archiveTodo(todo,todoIndex) {
    this.archivedTodos.push(todo);
    this.todos.splice(todoIndex,1);
  }

  getArchivedTodos() {
    return this.archivedTodos;
  }

  editTodo(todo,index) {
    this.todos[index] = todo;
  }

}
