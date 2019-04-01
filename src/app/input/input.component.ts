import {Component, ElementRef, OnInit} from '@angular/core';
import {todo} from "./todo.module";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

    private inputValue: string = "";
    private presentedList: todo[] = [];
    private list: todo[] = [];
    private completedList: todo[] = [];
    private activeList: todo[] = [];
    private elem;

    private active: boolean = true;
    private buttonNum: number = 1;

    constructor() {
    }

    ngOnInit() {
    }

    change(index: number): void {
        this.presentedList[index].completed = !this.presentedList[index].completed;

        this.completedList = [];
        this.activeList = [];

        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].completed === true) {
                this.completedList.push(this.list[i]);
            } else {
                this.activeList.push(this.list[i]);
            }
        }

    }

    onClickShowAll(): void {
        this.buttonNum = 1;
        this.active = true;
        this.presentedList = this.list.slice();
    }

    onClickShowActive(): void {
        this.buttonNum = 2;
        this.active = true;
        this.presentedList = this.activeList.slice();
    }

    onClickShowCompleted(): void {
        this.buttonNum = 3;
        this.active = false;
        this.presentedList = this.completedList.slice();

    }

    onGetInput(): void {

        this.elem = document.getElementById("myInput");
        this.inputValue = this.elem.value;


        if (this.inputValue === '') {
            alert("You must write something!");
        } else {
            const a = new todo(this.inputValue, false, true);
            this.list.push(a);
            this.activeList.push(a);
        }
        if (this.active)
            this.presentedList = this.list.slice();
        this.elem.value = "";


    }

    onClickClearCompleted(): void {
        this.list = this.activeList.slice();
        this.completedList = [];
        this.presentedList = this.list.slice();
    }

    onCursorClickMarkList(): void {

        if (this.completedList.length !== this.list.length &&
            this.list.length !== 0) {
            this.completedList = [];

            for (let i = 0; i < this.list.length; i++) {
                this.list[i].completed = true;
                this.completedList.push(this.list[i]);
            }
            this.presentedList = this.completedList;
            this.activeList = [];

        } else {

            this.activeList = [];
            for (let i = 0; i < this.list.length; i++) {
                this.list[i].completed = false;
                this.activeList.push(this.list[i]);
            }
            this.presentedList = this.activeList;
            this.completedList = [];
        }


    }

    onMouseOverAddX(index: number): void {
        this.presentedList[index].xFlag = true;
    }

    onMouseNotOverRemoveX(index: number): void {
        this.presentedList[index].xFlag = false;
    }

    onClickDeleteTodo(index: number): void {
        this.presentedList.splice(index, 1);

        if (this.list[index].completed) {
            for (let i = 0; i < this.completedList.length; i++)
                if (this.list[index] === this.completedList[i])
                    this.completedList.splice(i, 1);
        } else {
            for (let i = 0; i < this.activeList.length; i++)
                if (this.list[index] === this.activeList[i])
                    this.activeList.splice(i, 1);
        }

        this.list.splice(index, 1);
    }

}
