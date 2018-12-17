import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Coach } from "./coach.model";

@Injectable()
export class MenuService {

    private searchContentData = new Subject<string>();

    searchContent$ = this.searchContentData.asObservable();

    newSearch(search: string) {
        this.searchContentData.next(search);
        console.log(search);
    }
}