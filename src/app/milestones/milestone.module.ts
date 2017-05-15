import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MilestoneListComponent } from './milestone-list/milestone-list.component';
import { MilestoneRoutingModule } from './milestone-routing.module';
import { MilestoneService } from './milestone.service';

@NgModule({
     declarations: [
          MilestoneListComponent
     ],
     imports: [
          CommonModule,
          MilestoneRoutingModule
     ],
     providers: [
          { provide: MilestoneService, useClass: MilestoneService  }
     ]     
})
export class MilestoneModule {

}