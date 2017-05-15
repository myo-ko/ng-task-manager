import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MilestoneListComponent } from './milestone-list/milestone-list.component';

const milestoneRoutes: Routes = [
     {
          path: '',             
          component: MilestoneListComponent,                    
          // children: [
               
          // ]
     }    
    
];

@NgModule({
     imports: [
          RouterModule.forChild(milestoneRoutes)
     ],
     exports: [
          RouterModule
     ]
})
export class MilestoneRoutingModule {

}