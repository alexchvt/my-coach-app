import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'
import { HttpClient } from '@angular/common/http';
import { Coach } from './coach.model';
import { Observable } from 'rxjs';
import { Body } from '@angular/http/src/body';

@Injectable()
export class CoachsService {
    // const headers = new Headers({'Content-Type': 'application/json'})

    constructor(private http: Http,
                private httpClient: HttpClient) {}

    private serverUrl = 'http://localhost:9090'

    addCoach (coach: any) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
       return this.http.post(this.serverUrl + '/coaches', {Body: coach}, {headers: headers});
    }

    getCoachs(): Observable<Coach[]> {
        return this.httpClient.get<Coach[]>(this.serverUrl + '/coaches'); 
    }

    getCoach(id): Observable<Coach> {
        return this.httpClient.get<Coach>(this.serverUrl + '/coaches/' + id);
    }

}