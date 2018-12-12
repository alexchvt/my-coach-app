import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CoachsService } from '../../shared/coachs.service';
import { Coach } from 'src/shared/coach.model';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent implements OnInit {

  coach : Coach;

  constructor(
    private route: ActivatedRoute,
    private coachService: CoachsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCoach();
  }

  getCoach() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.coachService.getCoach(id).subscribe(coach => this.coach = coach);
    console.log(this.coach);
  }

}
