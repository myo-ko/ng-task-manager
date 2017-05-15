import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MilestoneService } from '../milestone.service';
import { Milestone } from '../milestone';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-milestone-list',
  templateUrl: './milestone-list.component.html',
  styleUrls: ['./milestone-list.component.css']
})
export class MilestoneListComponent implements OnInit {

  id: number;
  milestones: Milestone[];

  constructor(
    private milestoneService: MilestoneService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(paras => {

        this.id = +paras['id'];
        this.milestoneService.getMilestonesByProject(this.id)
        .then(x => this.milestones == x);

      });
  }

}
