import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {ListsService} from "./services/lists.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    private chosenKey: string;
    private nameToRemove: string;

    constructor(private elementRef: ElementRef,
                private listsService: ListsService) {
    }

    ngAfterViewInit(): void {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'lightgray';
    }


    onGetKey(key: string): void {
        this.chosenKey = key;
    }

    onDeleteUser(userName: string): void {
        this.nameToRemove = userName;
    }


}
