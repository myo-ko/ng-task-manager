
export class Milestone {

     constructor(
          public milestoneId: number,
          public msDescription: string,
          public startDate: Date,
          public dueDate: Date,
          public projectId: number
     ){}

     isLate(): boolean {          
          return this.milestoneId % 2 == 0; //even ids are late
     }

}