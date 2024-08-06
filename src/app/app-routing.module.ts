import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Section1Component } from './pages/section1/section1.component';

const routes: Routes = [
  { path: '', 
    component: HomeComponent 
  },
  { path: 'section-1', 
    loadChildren: () => import('./pages/section1/section1.module').then(m => m.Section1Module),
  },
  {
    path: 'section-3',
    loadChildren: () => import('./pages/section3/section3.module').then(m => m.Section3Module),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
