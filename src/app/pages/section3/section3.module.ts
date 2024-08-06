import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Section3RoutingModule } from './section3-routing.module';
import { Section3Component } from './section3.component';
import { TemplateDrivenComponent } from './pages/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { UserRegisterComponent } from './pages/reactive-forms/components/user-register/user-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegisterIntermediateComponent } from './pages/reactive-forms/components/user-register-intermediate/user-register-intermediate.component';
import { UserRegisterAdvanceComponent } from './pages/reactive-forms/components/user-register-advance/user-register-advance.component';


@NgModule({
  declarations: [
    Section3Component,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    UserRegisterComponent,
    UserRegisterIntermediateComponent,
    UserRegisterAdvanceComponent
  ],
  imports: [
    CommonModule,
    Section3RoutingModule,
    ReactiveFormsModule,
  ]
})
export class Section3Module { }
