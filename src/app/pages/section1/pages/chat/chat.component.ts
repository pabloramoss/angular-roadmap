import { Component } from '@angular/core';
import { Message } from './models/message.interface';

const agentAvatar = 'https://st5.depositphotos.com/72897924/62255/v/450/depositphotos_622556394-stock-illustration-robot-web-icon-vector-illustration.jpg';

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
      avatar: agentAvatar,
      name: 'User'
    },
    {
      id: '2',
      text: 'Hi, how can I help you?',
      date: new Date(),
      isAgent: true,
      avatar: 'https://pbs.twimg.com/media/FErSxElWYAUEpe2?format=jpg&name=medium',
    }
  ]

  onMessage(message: Message) {
    this.messages.push(message);
  }
}
