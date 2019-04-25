import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ListsService} from "../services/lists.service";
import {TaskModel} from "../task.model";
import {StorageManagerService} from "../services/storage-manager.service";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']

})
export class FooterComponent {

    @Output() private showList = new EventEmitter<boolean>();
    @Input() private itemsLeft: number = 0;

    constructor(private listsService: ListsService,
                private storageManagerService: StorageManagerService) {
    }

    showAllTasks(): void {
        this.showList.emit(null);
    }

    showActiveTasks(): void {
        this.showList.emit(true);
    }

    showCompletedTaks(): void {
        this.showList.emit(false);

    }

    clearCompletedTasks(): void {

        let tempArr: TaskModel[] = [];
        for (let i = 0; i < this.listsService.list.length; i++) {
            if (!(this.listsService.list[i].completed)) {
                tempArr.push(this.listsService.list[i]);
            }
        }
        this.listsService.list = tempArr;
        this.itemsLeft = this.listsService.list.length;

        this.storageManagerService.setData(this.listsService.key, JSON.stringify(this.listsService.list));

    }

}
