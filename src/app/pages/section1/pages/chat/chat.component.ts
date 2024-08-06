import { Component } from '@angular/core';
import { Message } from './models/message.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  messages: Message[] = [
    {
      id: '1',
      text: 'Hi',
      date: new Date(),
      isAgent: false,
      avatar: 'https://pbs.twimg.com/media/FErSxElWYAUEpe2?format=jpg&name=medium',
      name: 'User'
    },
    {
      id: '2',
      text: 'Hi, how can I help you?',
      date: new Date(),
      isAgent: true,
    }
  ]

  onMessage(message: Message) {
    console.log(message);
    this.messages.push(message);
  }
}
