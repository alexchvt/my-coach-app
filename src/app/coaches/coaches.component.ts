import { Component, OnInit, Input } from '@angular/core';
import { Coach } from '../../shared/coach.model';
import { mockCoaches } from './mock-coaches';
import { CoachsService } from '../../shared/coachs.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {

  searchTokenReceiver: string;
  coaches: Coach[];

  constructor(private coachsServices: CoachsService) {
    this.coaches = mockCoaches; 
  }

  receiveSearch($event) {
    this.searchTokenReceiver = $event
  }

  ngOnInit() {
    this.coachsServices.getCoachs().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}
