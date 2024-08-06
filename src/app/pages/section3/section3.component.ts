import { Component } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css'
})
export class Section3Component {
  linksApp = [
    { title: 'Template driven', url: '/section-3/template-driven' },
    { title: 'Reactive forms', url: '/section-3/reactive-forms' },
  ]
}
