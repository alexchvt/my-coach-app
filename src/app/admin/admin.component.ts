import { Component, OnInit, NgModule } from '@angular/core';
import { CoachsService } from 'src/shared/coachs.service';
import { Coach } from 'src/shared/coach.model';
import { pairs } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  coach : Coach;

  constructor(private coachsService: CoachsService) { }

  onAddCoach(){
    console.log(JSON.stringify([this.coach]));
    this.coachsService.addCoach(this.coach).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
    );
    
  };

  private generateId() {
    return Math.round(Math.random() * 100)
  };

  ngOnInit() {
    this.coach = {
      name : "test",
      lastname : "test",
      age: 18,
      city: "paris",
      zipcode: 86400,
      activities: "zumba",
      picture: "example.jpeg",
    } 
  }

}
