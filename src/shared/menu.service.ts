import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class MenuService {

    private searchContentData = new Subject<string>();

    searchContent$ = this.searchContentData.asObservable();

    newSearch(search: string) {
        this.searchContentData.next(search);
        console.log(search);
    }
}