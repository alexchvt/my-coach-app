import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {

    constructor (private http: HttpClient) {}

    private userUrl = 'http://localhost:9090/';

    public getUsers() {
        return this.http.get(this.userUrl + '/users')
    }
} 