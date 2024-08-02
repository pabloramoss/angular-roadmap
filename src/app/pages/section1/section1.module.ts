import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Section1RoutingModule } from './section1-routing.module';
import { TodoComponent } from './pages/todo/todo.component';
import { TaskComponent } from './pages/todo/components/task/task.component';
import { TaskFormComponent } from './pages/todo/components/task-form/task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './pages/chat/chat.component';
import { ChatFormComponent } from './pages/chat/components/chat-form/chat-form.component';
import { ChatMessageComponent } from './pages/chat/components/chat-message/chat-message.component';


@NgModule({
  declarations: [
    TodoComponent,
    TaskComponent,
    TaskFormComponent,
    ChatComponent,
    ChatFormComponent,
    ChatMessageComponent,
  ],
  imports: [
    CommonModule,
    Section1RoutingModule,
    ReactiveFormsModule,
  ]
})
export class Section1Module { }
