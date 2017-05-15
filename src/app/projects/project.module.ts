import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { ProjectService } from './project.service';
import { ProjectRoutingModule } from './project-routing.module';
import { MilestoneModule } from '../milestones/milestone.module';


@NgModule({
     declarations: [
          ProjectListComponent,
          ProjectComponent          
     ],
     imports: [
          CommonModule,
          MilestoneModule,          
          ProjectRoutingModule,
     ],
     providers: [
          { provide: ProjectService, useClass: ProjectService }
     ]
})
export class ProjectModule {

}