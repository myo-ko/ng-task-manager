import { Injectable } from '@angular/core';

import { Milestone } from './milestone';

import 'rxjs';

let Milestones: Milestone[] = [
     new Milestone(1, "Milestone 1", new Date("2017-01-21"), new Date("2017-01-31"), 1),
     new Milestone(2, "Milestone 2", new Date("2017-01-22"), new Date("2017-01-31"), 1),
     new Milestone(3, "Milestone 3", new Date("2017-01-21"), new Date("2017-01-31"), 2),
     new Milestone(4, "Milestone 4", new Date("2017-02-01"), new Date("2017-02-10"), 2)
]


@Injectable()
export class MilestoneService {

     getMilestones(): Promise<Milestone[]> 
     {
          return Promise.resolve(Milestones);
     }

     getMilestonesByProject(projectId: number|string): Promise<Milestone[]>
     {          
          return Promise.resolve(Milestones.filter(ms => ms.projectId === +projectId));     
     }

     getNewMilestone(projectId: number|string): Promise<Milestone>{
          let newId: number = Math.max.apply(Math, Milestones.map(ms => ms.milestoneId));
          let milestone = new Milestone(newId + 1, "", new Date(), new Date(), +projectId);
          return Promise.resolve(milestone);
     }

     addNewMilestone(milestone: Milestone)
     {
          Milestones.push(milestone);
          console.log(Milestones);
          //return this.getMilestonesByProject(milestone.projectId);
     }

}