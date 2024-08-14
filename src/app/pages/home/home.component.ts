import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sections =[
    { title: 'Section 1: Components and Control Flow (ngIf, ngFor)', url: '/section-1', status: '✅' },
    { title: 'Section 2: Basic Dependency Injection', url: '/section-2', status: '✅' },
    { title: 'Section 3: Forms (Template-driven and Reactive with Validators)', url: '/section-3', status: '⭕' },
    { title: 'Section 4: Directives and Pipes', url: '/section-4', status: '⭕' },
    { title: 'Section 5: RxJs (Observables and Subjects)', url: '/section-5', status: '⭕' },
    { title: 'Section 6: Intermediate RxJs (async pipe, Operators)', url: '/section-6', status: '⭕' },
    { title: 'Section 7: Advanced RxJs (More Operators, Custom Operators)', url: '/section-7', status: '⭕' },
    { title: 'Section 8: Advanced Dependency Injection', url: '/section-8', status: '⭕' },
    { title: 'Section 9: Understanding Angular’s Internal Mechanisms', url: '/section-9', status: '⭕' }
  ]
}
