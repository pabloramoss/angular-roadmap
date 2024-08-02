import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input() task?: Todo;
  @Output() toggleDone = new EventEmitter<Todo>();
  @Output() deleteTask = new EventEmitter<Todo>();

  onToggleDone() {
    if (this.task) {
      this.task.done = !this.task.done;
      this.toggleDone.emit(this.task);
    }
  }

  onDeleteTask() {
    if (this.task) {
      this.deleteTask.emit(this.task);
    }
  }
}
