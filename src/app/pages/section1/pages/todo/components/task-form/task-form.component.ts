import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  form: FormGroup;

  @Output() addTask = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['']
    });
  }

  onSubmit() {
    // if title is empty, do nothing
    if (!this.form.value.title.trim()) return;

    this.addTask.emit(this.form.value.title);
    this.form.reset();
  }
}
