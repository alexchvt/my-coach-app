import { Component, OnInit } from '@angular/core';
import { Coach } from '../../shared/coach.model';
import { mockCoaches } from './mock-coaches';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {
  coaches: Coach[];

  constructor() {
    this.coaches = mockCoaches; 
  }

  ngOnInit() {
    
  }

}
