import { Component } from '@angular/core';

import { ProjectService } from './projects/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: ProjectService, useClass: ProjectService }
  ]
})
export class AppComponent {
  title = 'Task Manager';
}
