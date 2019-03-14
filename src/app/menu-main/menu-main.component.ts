import { Component, OnInit, Directive, NgModule, Output, EventEmitter } from '@angular/core';
import { MenuService } from 'src/shared/menu.service';
import { CoachsService } from 'src/shared/coachs.service';
import { Coach } from 'src/shared/coach.model';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss']
})
export class MenuMainComponent implements OnInit {
  navbarOpen = false;
  coaches: Coach[];
  email: string;

  searchContent: string;

  constructor(private menuservice: MenuService, private coachsService: CoachsService, private authService: AuthService) {}

    sendSearch() {
      this.menuservice.newSearch(this.searchContent);
      this.searchContent = "";
    }

  fillCoachs(search: string) {
  this.coachsService.searchCoach(search).subscribe(
      coaches => this.coaches = coaches);
  }

  ngOnInit() {
  }

  userIsAdmin() {
    if (this.authService.getCurrentUserType() == 'admin') {
    return true;
    }
    return false;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onLogout() {
    this.authService.logout();
  }

}
