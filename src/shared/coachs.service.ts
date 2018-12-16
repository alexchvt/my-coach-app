import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Coach } from './coach.model';
import { Observable } from 'rxjs';
import { Body } from '@angular/http/src/body';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable()
export class CoachsService {
    // const headers = new Headers({'Content-Type': 'application/json'})

    constructor(private http: Http,
                private httpClient: HttpClient) {}

    private serverUrl = 'http://localhost:9090'

    addCoach (coach: Coach): Observable<Coach> {
       return this.httpClient.post<Coach>(this.serverUrl + '/coaches', coach, httpOptions);
    }

    getCoachs(): Observable<Coach[]> {
        return this.httpClient.get<Coach[]>(this.serverUrl + '/coaches'); 
    }

    getCoach(id): Observable<Coach> {
        return this.httpClient.get<Coach>(this.serverUrl + '/coaches/' + id);
    }

}