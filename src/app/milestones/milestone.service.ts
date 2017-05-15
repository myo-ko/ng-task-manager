import { Injectable } from '@angular/core';

import { Milestone } from './milestone';

import 'rxjs';

let Milestones: Milestone[] = [
     new Milestone(1, "Milestone 1", new Date("2017-01-21"), new Date("2017-01-31"), 1),
     new Milestone(2, "Milestone 2", new Date("2017-01-22"), new Date("2017-01-31"), 1),
     new Milestone(3, "Milestone 3", new Date("2017-01-21"), new Date("2017-01-31"), 2),
     new Milestone(4, "Milestone 1", new Date("2017-02-01"), new Date("2017-02-10"), 2)
]


@Injectable()
export class MilestoneService {

     getMilestones(): Promise<Milestone[]> 
     {
          return Promise.resolve(Milestones);
     }

     getMilestonesByProject(projectId: number|string)
     {
          
          return Promise.resolve<Milestone[]>(Milestones.filter(x => 
          {
               x.projectId === projectId
          }));

          // return milestonePromise
          // .then(milestones => 
          // {
          //      milestones.find(milestone => milestone.projectId === +projectId);
          // });          
     }

}