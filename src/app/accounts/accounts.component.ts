import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

    constructor() {
    }

    ngOnInit() {
        this.firstKey = "usersTODO";


        if (window.localStorage) {
            if (localStorage.length > 0) {
                if (localStorage.getItem(this.firstKey))
                    this.listOfNames = JSON.parse(localStorage.getItem(this.firstKey));
                else
                    localStorage.setItem(this.firstKey, JSON.stringify(this.listOfNames));
            }
        }

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
        localStorage.setItem(this.firstKey, JSON.stringify(this.listOfNames));
    }

    onNameClick(index: number): void {
        this.key.emit(this.listOfNames[index]);
    }

    onRemoveName(name: string): void {
        this.listOfNames.splice(this.listOfNames.indexOf(name), 1);
        localStorage.setItem(this.firstKey, JSON.stringify(this.listOfNames));


    }
}
