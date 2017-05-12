import { Injectable } from '@angular/core';

import { Project } from './project';

let PROJECTS: Project[] = [
     new Project(1, "Sample", new Date("2016-12-12"), new Date("2017-05-15")),
     new Project(1, "Sample 2", new Date("2016-12-12"), new Date("2017-1-13"))
];

@Injectable()
export class ProjectService {

     constructor() {
     }

     getProjects(): Promise<Project[]> {
          return Promise.resolve(PROJECTS);
     }

     getProjectsSlowly(): Promise<Project[]>{
          return new Promise(x => 
          {
               setTimeout(() => x(this.getProjects()), 2000);
          });
     }

}