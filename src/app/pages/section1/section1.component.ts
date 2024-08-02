import { Component } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component {
  linksApp = [
    { title: 'Todo', url: '/section-1/todo' },
    { title: 'Chat', url: '/section-1/chat' },
  ]
}
