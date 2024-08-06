import { Component, Input } from '@angular/core';
import { Message } from '../../models/message.interface';

const AGENT_AVATAR_URL = 'https://st5.depositphotos.com/72897924/62255/v/450/depositphotos_622556394-stock-illustration-robot-web-icon-vector-illustration.jpg';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.css'
})
export class ChatMessageComponent {
  @Input() message?: Message;
  agentAvatar = AGENT_AVATAR_URL;
}
