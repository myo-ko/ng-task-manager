import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectListComponent } from "./project-list/project-list.component";
import { MilestoneModule } from '../milestones/milestone.module';
import { MilestoneListComponent } from '../milestones/milestone-list/milestone-list.component';

const routes: Routes = [
     {
          path: 'projects',
          component: ProjectListComponent,          
          children: [
               {
                    path: ':id/milestones',                                        
                    //loadChildren: 'app/milestones/milestone.module#MilestoneModule'
                    loadChildren: () => MilestoneModule,                    
               }
          ]          
     }
];

@NgModule({
     imports: [          
          RouterModule.forChild(routes)
     ],
     exports: [
          RouterModule
     ]
})
export class ProjectRoutingModule {

}