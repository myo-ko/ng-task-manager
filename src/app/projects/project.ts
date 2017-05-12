
export class Project {

     constructor(
          public projectId: number,
          public description: string,
          public startDate: Date,
          public endDate: Date
     ) {
     }

     public getDaysRemaining() {
          var result = this.endDate.valueOf() - Date.now().valueOf();
          result = Math.ceil(result / (1000 * 3600 * 24));
          return result < 0 ? 0 : result;
     }

}