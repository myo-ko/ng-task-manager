import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MilestoneListComponent } from './milestone-list/milestone-list.component';
import { MilestoneRoutingModule } from './milestone-routing.module';
import { MilestoneService } from './milestone.service';
import { MilestoneFormComponent } from './milestone-form/milestone-form.component';

@NgModule({
     declarations: [
          MilestoneListComponent,
          MilestoneFormComponent
     ],
     imports: [
          CommonModule,
          MilestoneRoutingModule,
          FormsModule
     ],
     providers: [
          { provide: MilestoneService, useClass: MilestoneService  }
     ]     
})
export class MilestoneModule {

}