import {Component, OnInit} from '@angular/core';
import {NotesServices} from "./notes.services";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
    providers: [NotesServices]
})
export class InputComponent implements OnInit {

    private inputValue: string;
    private li;
    private t: Object;
    private list : string[] = [];

    constructor(private noteService: NotesServices) {
    }

    ngOnInit() {
    }

    onGetInput(): void {


        this.li = document.createElement("li");
        this.inputValue = document.getElementById("myInput").value;
        this.noteService.addNote(this.inputValue);
       // this.t = document.createTextNode(this.inputValue);
     //   this.li.appendChild(this.t);
        if (this.inputValue === '') {
            alert("You must write something!");
        } else {
        //    document.getElementById("myUL").appendChild(this.li);
        }
        document.getElementById("myInput").value= "";

        this.list = this.noteService.getAllNotes();

    }
}
