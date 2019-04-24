
export class TaskModel {
    constructor(text: string, completed: boolean, condition: boolean) {
        this.text = text;
        this.completed = completed;
        this.condition = condition;
        this.xFlag=false;
    }

    public text: string;
    public completed: boolean;
    public condition: boolean;
    public xFlag:boolean;

}