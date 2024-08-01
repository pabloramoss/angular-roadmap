import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'section-1', loadChildren: () => import('./pages/section1/section1.module').then(m => m.Section1Module) },
  // { path: 'section-1/todo', component: TodoComponent },
  // { path: 'section-1/chat', component: ChatComponent },
  // { path: 'section-2', component: Section2Component },
  // { path: 'section-2/app1', component: Section2Component },
  // { path: 'section-2/app2', component: Section2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
