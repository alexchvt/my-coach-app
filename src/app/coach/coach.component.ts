import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CoachsService } from '../../shared/coachs.service';
import { Coach } from 'src/shared/coach.model';
import * as firebase from 'firebase';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent implements OnInit {

  coach: Coach;
  userType: String;
  show = false;

  constructor(
    private route: ActivatedRoute,
    private coachService: CoachsService,
    private location: Location,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getCoach();
    this.userType = this.authService.getCurrentUserType()
  }

  updateCoach() {
    this.coachService.updateCoach(this.coach).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
    );
  }

  deleteCoach() {
    this.coachService.deleteCoach(this.coach.id).subscribe(
    (response) => console.log(response),
      (error) => console.log(error));
  }

  getCoach() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.coachService.getCoach(id).subscribe(coach => this.coach = coach);
    console.log(this.coach);
  }

  getConversation() {
    this.userType = this.authService.getCurrentUserType();
  }

  isUserAdmin() {
    if (this.authService.getCurrentUserType() == 'admin') {
    return true;
    }
    return false;
  }
}
