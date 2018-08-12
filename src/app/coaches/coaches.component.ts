import { Component, OnInit } from '@angular/core';
import { Coach } from '../../shared/coach.model';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {
  coaches: Coach[];

  constructor() { }

  ngOnInit() {
  }

}
