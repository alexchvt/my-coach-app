import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'
import { HttpClient } from '@angular/common/http';
import { Coach } from './coach.model';

@Injectable()
export class CoachsService {
    // const headers = new Headers({'Content-Type': 'application/json'})

    constructor(private http: Http,
                private httpClient: HttpClient) {}

    private serverUrl = 'http://localhost:9090'

    saveCoach (servers: any[]) {
       return this.http.post(this.serverUrl + '/coaches', servers)
    }

    getCoachs() {
        return this.http.get(this.serverUrl + '/coaches'); 
    }

}