import { Injectable } from '@angular/core'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Coach } from './coach.model';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable()
export class CoachsService {
    // const headers = new Headers({'Content-Type': 'application/json'})

    constructor(private httpClient: HttpClient) {}

    private serverUrl = 'http://localhost:9090'

    addCoach (coach: Coach): Observable<Coach> {
       return this.httpClient.post<Coach>(this.serverUrl + '/coaches', coach, httpOptions);
    }

    updateCoach(coach: Coach): Observable<Coach> {
        return this.httpClient.put<Coach>(this.serverUrl + '/coaches/' + coach.id, coach, httpOptions);
     }

     deleteCoach(id): Observable<Coach> {
        return this.httpClient.delete<Coach>(this.serverUrl + '/coaches/' + id);
    } 

    searchCoach (search: String): Observable<Coach[]> {
        return this.httpClient.post<Coach[]>(this.serverUrl + '/coaches/search', search, httpOptions);
     }

    getCoachs(): Observable<Coach[]> {
        return this.httpClient.get<Coach[]>(this.serverUrl + '/coaches'); 
    }

    getCoach(id): Observable<Coach> {
        return this.httpClient.get<Coach>(this.serverUrl + '/coaches/' + id);
    }

}