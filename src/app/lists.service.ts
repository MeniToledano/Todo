import {Todo} from "./task.model";

export class ListsService {

    key: string = "";
    list: Todo[] = [];
    numberOfCompletedTasks: number = 0;

    getNumOfCompTask(): number {
        this.numberOfCompletedTasks = 0;
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].completed)
                this.numberOfCompletedTasks++;
        }
        return this.numberOfCompletedTasks;
    }
}