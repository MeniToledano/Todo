import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodoHomeComponent} from './todo-home/todo-home.component';
import {AccountsComponent} from './accounts/accounts.component';
import {TodoEntryComponent} from './todo-entry/todo-entry.component';
import {ListsService} from "./lists.service";
import {FooterComponent} from './footer/footer.component';
import {InputCompComponent} from "./input-comp/input-comp.component";

@NgModule({
    declarations: [
        AppComponent,
        TodoHomeComponent,
        AccountsComponent,
        TodoEntryComponent,
        InputCompComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [ListsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
