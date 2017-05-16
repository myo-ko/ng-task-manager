import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Milestone } from '../milestone';
import { MilestoneService } from '../milestone.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-milestone-form',
  templateUrl: './milestone-form.component.html',
  styleUrls: ['./milestone-form.component.css']
})
export class MilestoneFormComponent implements OnInit {

  model: Milestone = new Milestone(0, "", new Date(), new Date(), 0);

  constructor(
    private router: ActivatedRoute,
    private msService: MilestoneService,
    private location: Location
  ) { }

  ngOnInit() {
    this.router.params
      .subscribe(params => {
        this.msService.getNewMilestone(+params['id'])
          .then(x => {
            this.model = x;
            console.log(x);
          });
      });
  }

  updateStartDate($event): void {
    if (Date.parse($event) != NaN) {
      this.model.startDate = new Date($event);
    }
  }

  updateDueDate($event): void {
    if (Date.parse($event) != NaN) {
      this.model.dueDate = new Date($event);
    }
  }

  submitForm(): void {

    this.msService.addNewMilestone(this.model);
    console.log('form submitted');
    this.msService.getNewMilestone(this.model.projectId)
      .then(x => {
        this.model = x;
        console.log(x);
      });

  }

}
