import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Section1RoutingModule } from './section1-routing.module';
import { TodoComponent } from './pages/todo/todo.component';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    Section1RoutingModule
  ]
})
export class Section1Module { }
