import {TaskModel} from "../task.model";

export class ListsService {

   public key: string = "";
   public list: TaskModel[] = [];
   public numberOfCompletedTasks: number = 0;

    getNumOfCompTask(): number {
        this.numberOfCompletedTasks = 0;
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].completed)
                this.numberOfCompletedTasks++;
        }
        return this.numberOfCompletedTasks;
    }
}