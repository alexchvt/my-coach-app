import { Component, OnInit, Input } from '@angular/core';
import { Coach } from '../../shared/coach.model';
import { mockCoaches } from './mock-coaches';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {

  searchTokenReceiver: string;
  coaches: Coach[];

  constructor() {
    this.coaches = mockCoaches; 
  }

  receiveSearch($event) {
    this.searchTokenReceiver = $event
  }

  ngOnInit() {
    
  }

}
