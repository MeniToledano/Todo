import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StorageManagerService} from "../services/storage-manager.service";

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.css']

})
export class AccountsComponent implements OnInit {

    private listOfNames: string[] = [];
    private nameInput: string;
    private element;
    private firstKey: string;
    @Input() private deleteName: string = '';
    @Output() private key = new EventEmitter<string>();

    constructor(private storageManagerService: StorageManagerService) {
    }

    ngOnInit() {
        this.firstKey = "usersTODO";
        this.listOfNames = this.storageManagerService.initilize(this.firstKey, this.listOfNames);

        if (this.deleteName) {
            this.onRemoveName(this.deleteName);
        }
    }

    onClickAdd(): void {
        this.element = document.getElementById("inputTag");
        this.nameInput = this.element.value;
        if (this.nameInput === '') {
            alert("please enter your name:");
        }
        else if (this.listOfNames.includes(this.nameInput)) {
            alert("Taken name, please choose different name:");
        } else {
            this.listOfNames.push(this.nameInput);
            this.element.value = "";
        }
        this.storageManagerService.setData(this.firstKey, JSON.stringify(this.listOfNames));


    }

    onNameClick(index: number): void {
        this.key.emit(this.listOfNames[index]);
    }

    onRemoveName(name: string): void {
        let temp = this.listOfNames.indexOf(name);
        if (temp >= 0) {
            this.listOfNames.splice(temp, 1);
            this.storageManagerService.setData(this.firstKey, JSON.stringify(this.listOfNames));
        }

    }
}
