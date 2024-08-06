import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section3Component } from './section3.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { TemplateDrivenComponent } from './pages/template-driven/template-driven.component';

const routes: Routes = [
  {
    path: '',
    component: Section3Component,
  },
  {
    path: 'template-driven',
    component: TemplateDrivenComponent
  },
  {
    path: 'reactive-forms',
    component: ReactiveFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Section3RoutingModule { }
