
export class Milestone {

     constructor(
          public milestoneId: number,
          public msDescription: string,
          public startDate: Date,
          public dueDate: Date,
          public projectId: number
     ){}

}