import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoachsService } from '../../shared/coachs.service';
import { Coach } from 'src/shared/coach.model';
import * as firebase from 'firebase';
import { AuthService } from 'src/shared/auth.service';
import { Message } from 'src/shared/message.model';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent implements OnInit {

  coach: Coach;
  userType: String;
  show = false;
  message: Message;

  constructor(
    private route: ActivatedRoute,
    private coachService: CoachsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getCoach();
    this.userType = this.authService.getCurrentUserType();
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
  }

  getConversation() {
    this.userType = this.authService.getCurrentUserType();
  }

  onSendMessage(mymessage) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.message.content = mymessage;
    // this.message.emitter = this.userType;
    this.coachService.postMessage(id, 1, mymessage);
  }

  isUserAdmin() {
    if (this.userType === 'admin') {
    return true;
    }
    else{
    return false;
    }
  }
}
