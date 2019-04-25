import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListsService} from "../services/lists.service";
import {StorageManagerService} from "../services/storage-manager.service";

@Component({
    selector: 'app-todo-home',
    templateUrl: './todo-home.component.html',
    styleUrls: ['./todo-home.component.css']

})
export class TodoHomeComponent implements OnInit {


    @Input() private key: string;
    @Output() private changeUserEvent = new EventEmitter<string>();
    @Output() private deleteUser = new EventEmitter<string>();
    private taskState: boolean;
    private taskComplete: number = 0;

    constructor(private listsService: ListsService,
                private storageManagerService: StorageManagerService) {
    }

    ngOnInit() {
        this.listsService.key = this.key;
        this.listsService.list = this.storageManagerService.initilize(this.listsService.key, this.listsService.list);
        if (this.listsService.list)
            this.taskComplete = this.listsService.list.length - this.listsService.getNumOfCompTask();
    }

    onChangeUser(): void {
        this.changeUserEvent.emit('');
    }

    onDeleteUser(): void {
        this.storageManagerService.deleteData(this.key);
        this.deleteUser.emit(this.key);
        this.onChangeUser();
    }

    onShowList(taskState: boolean): void {
        this.taskState = taskState;
        this.storageManagerService.setData(this.listsService.key, JSON.stringify(this.listsService.list));
    }

    onMouseOverAddX(index: number): void {
        this.listsService.list[index].showXBtn = true;
    }

    onMouseNotOverRemoveX(index: number): void {
        this.listsService.list[index].showXBtn = false;
    }
}
