import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskModel} from "../task.model";
import {ListsService} from "../services/lists.service";
import {StorageManagerService} from "../services/storage-manager.service";

@Component({
    selector: 'app-todo-entry',
    templateUrl: './todo-entry.component.html',
    styleUrls: ['./todo-entry.component.css']
})
export class TodoEntryComponent implements OnInit {

    @Input() task: TaskModel;
    @Input() index: number;
    @Output() private numberOfTaskCompleted = new EventEmitter<number>();

    constructor(private listsService: ListsService,
                private storageManagerService: StorageManagerService) {
    }

    ngOnInit() {
        this.numberOfTaskCompleted.emit(this.listsService.list.length - this.listsService.getNumOfCompTask());
    }

    changeTaskState(index: number): void {
        this.task.completed = !this.task.completed;
        this.numberOfTaskCompleted.emit(this.listsService.list.length - this.listsService.getNumOfCompTask());

        this.storageManagerService.setData(this.listsService.key, JSON.stringify(this.listsService.list));
    }

    onClickDeleteTodo(index: number): void {
        this.listsService.list.splice(index, 1);
        this.numberOfTaskCompleted.emit(this.listsService.list.length - this.listsService.getNumOfCompTask());

        this.storageManagerService.setData(this.listsService.key, JSON.stringify(this.listsService.list));

    }


}
