import { Component } from '@angular/core';
import { Todo } from './models/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todoList: Todo[] = [
    { id: 1, title: 'Learn Angular', done: false },
    { id: 2, title: 'Learn TypeScript', done: false },
    { id: 3, title: 'Learn RxJs', done: false },
    { id: 4, title: 'Learn Angular Material', done: false },
    { id: 5, title: 'Learn Angular CLI', done: false }
  ]

  onDeleteTask(task: Todo) {
    this.todoList = this.todoList.filter(t => t.id !== task.id);
  }

  onAddTask(title: string) {
    const task: Todo = {
      id: this.todoList.length + 1,
      title,
      done: false
    };
    this.todoList.push(task);
  }

  onToggleDone(task: Todo) {
    const index = this.todoList.findIndex(t => t.id === task.id);
    this.todoList[index] = task;
  }
}
