import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListsService} from "../lists.service";

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

    constructor(private listsService: ListsService) {
    }

    ngOnInit() {

        this.listsService.key = this.key;
        if (window.localStorage) {
            if (localStorage.length > 0) {
                if (localStorage.getItem(this.key)) {
                    this.listsService.list = JSON.parse(localStorage.getItem(this.key));
                    this.taskComplete = this.listsService.list.length - this.listsService.getNumOfCompTask();
                }
            }
            else {
                localStorage.setItem(this.key, JSON.stringify(this.listsService.list));
            }
        }

    }

    onChangeUser(): void {
        this.changeUserEvent.emit('');
    }

    onDeleteUser(): void {
        localStorage.removeItem(this.key);
        this.deleteUser.emit(this.key);
        this.onChangeUser();
    }

    onShowList(taskState: boolean): void {
        this.taskState = taskState;
        if (window.localStorage) {
            localStorage.setItem(this.listsService.key, JSON.stringify(this.listsService.list));
        }
    }

    onMouseOverAddX(index: number): void {
        this.listsService.list[index].xFlag = true;
    }

    onMouseNotOverRemoveX(index: number): void {
        this.listsService.list[index].xFlag = false;
    }
}
