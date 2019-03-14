import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/auth.service';
import { CoachsService } from '../../shared/coachs.service';
import { Coach } from '../../shared/coach.model';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../../shared/message.model';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  messages: Message[];

  constructor(private route: ActivatedRoute, private coachService: CoachsService, private authSerice: AuthService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.coachService.getMessages(id, 1).subscribe(
      messages => this.messages = messages);
  }

  getProfilePicture(){
  }

}
