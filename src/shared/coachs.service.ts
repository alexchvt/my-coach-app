import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'

@Injectable()
export class CoachsService {
    // const headers = new Headers({'Content-Type': 'application/json'})

    constructor(private http: Http) {}

    saveCoach (servers: any[]) {
       return this.http.post('http://localhost:9090/coaches', servers)
    }

    getCoachs() {
        return this.http.get('http://localhost:9090/coaches'); 
    }

}