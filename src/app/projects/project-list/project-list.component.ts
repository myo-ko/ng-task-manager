import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  selectedProject: Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects()
    .then(x => 
    { 
      this.projects = x 
    });
  }

  selectProject(project: Project): void {
    this.selectedProject = project;
  }

}
