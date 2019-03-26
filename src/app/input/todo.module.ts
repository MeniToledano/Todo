import {NotesServices} from "./notes.services";

export class todo {
    constructor(text: string, completed: boolean, condition: boolean) {
        this.text = text;
        this.completed = completed;
        this.condition = condition;
    }

    public text: string;
    public completed: boolean;
    public condition: boolean;

}