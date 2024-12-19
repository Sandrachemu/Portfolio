import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio built with Angular.',
      link: 'https://github.com/yourusername/portfolio',
    },
    {
      title: 'E-Commerce Platform',
      description: 'An online shop built with Angular and Node.js.',
      link: 'https://github.com/yourusername/ecommerce',
    },
  ];
}
