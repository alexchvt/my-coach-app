import { Component, OnInit, Input } from '@angular/core';
import { Coach } from '../../shared/coach.model';

import { CoachsService } from '../../shared/coachs.service';
import { MenuService } from 'src/shared/menu.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {

  searchString: string;
  coaches: Coach[];
  subscription: Subscription

  constructor(private coachsService: CoachsService, private menuservice: MenuService, private authService: AuthService) {
    this.subscription = menuservice.searchContent$.subscribe(searchString => {
      this.searchString = searchString;
      this.fillCoachs(searchString);

      if (!searchString){
        this.coachsService.getCoachs().subscribe(
          coaches => this.coaches = coaches);
      }
    });
  }

  

  ngOnInit(): void {
    this.coachsService.getCoachs().subscribe(
      coaches => this.coaches = coaches);
  }

  fillCoachs(search: string) {
    this.coachsService.searchCoach(search).subscribe(
        coaches => this.coaches = coaches);
    }

}
