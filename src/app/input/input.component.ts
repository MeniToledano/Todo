import {Component, OnInit} from '@angular/core';
import {NotesServices} from "./notes.services";
import {todo} from "./todo.module";
import {element} from "protractor";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
    providers: [NotesServices]
})
export class InputComponent implements OnInit {

    private inputValue: string = "";
    private presentedList: todo[] = [];
    private list: todo[] = [];
    private completedList: todo[] = [];
    private activeList: todo[] = [];
    private elem;
    private completed = false;
    private active: boolean = true;


    constructor(private noteService: NotesServices) {
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

    showAll() :void{

        this.active = true;
        this.presentedList = this.list;
    }

    showActive():void {
        this.active = true;
        this.presentedList = this.activeList;
    }

    showCompleted():void {
        this.active = false;
        this.presentedList = this.completedList;

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
            this.presentedList = this.list;
        this.elem.value = "";


    }

    clearCompleted():void{
        this.list = this.activeList;
        this.completedList = [];
        this.presentedList = this.list;
    }
}
