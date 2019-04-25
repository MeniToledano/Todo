import {Component, EventEmitter, Output} from '@angular/core';
import {ListsService} from "../services/lists.service";
import {TaskModel} from "../task.model";
import {StorageManagerService} from "../services/storage-manager.service";

@Component({
    selector: 'app-input-comp',
    templateUrl: './input-comp.component.html',
    styleUrls: ['./input-comp.component.css']

})

export class InputCompComponent {

    private inputValue: string = "";
    private elem;
    private taskCompleted: number;
    @Output() private updateCompletedTasks = new EventEmitter<number>();

    constructor(private listsService: ListsService,
                private storageManagerService: StorageManagerService) {
    }

    onCursorClickMarkList(): void {
        this.taskCompleted = this.listsService.getNumOfCompTask();
        if (this.taskCompleted !== this.listsService.list.length && this.listsService.list.length !== 0) {
            for (let i = 0; i < this.listsService.list.length; i++)
                this.listsService.list[i].completed = true;
        } else {
            for (let i = 0; i < this.listsService.list.length; i++)
                this.listsService.list[i].completed = false;
        }

        this.storageManagerService.setData(this.listsService.key, JSON.stringify(this.listsService.list));

        this.updateCompletedTasks.emit(this.listsService.list.length - this.listsService.getNumOfCompTask());

    }

    onGetInput(): void {

        this.elem = document.getElementById("myInput");
        this.inputValue = this.elem.value;

        if (this.inputValue === '') {
            alert("You must write something!");
        } else {
            const a = new TaskModel(this.inputValue, false, true);
            this.listsService.list.push(a);
            this.updateCompletedTasks.emit(this.listsService.list.length - this.listsService.getNumOfCompTask());

            this.storageManagerService.setData(this.listsService.key, JSON.stringify(this.listsService.list));

        }
        this.elem.value = "";

    }
}
