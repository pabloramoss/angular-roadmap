import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Message } from '../../models/message.interface';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrl: './chat-form.component.css'
})
export class ChatFormComponent {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      agentMessage: '',
      userMessage: '',
    });
  }
  
  @Output() newMessage = new EventEmitter<Message>();

  onSubmit() {
    if (!this.form.value.userMessage.trim()) return;
    console.log(this.form.value.agentMessage);
    this.newMessage.emit({
      id: Date.now().toString(),
      text: this.form.value.userMessage,
      date: new Date(),
      isAgent: false,
      avatar: 'https://st5.depositphotos.com/72897924/62255/v/450/depositphotos_622556394-stock-illustration-robot-web-icon-vector-illustration.jpg',
      name: 'User'
    }); 

    this.form.reset();
  }
}
