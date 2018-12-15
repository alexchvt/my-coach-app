import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoachesComponent } from './coaches/coaches.component';
import { CoachComponent } from './coach/coach.component';
import { TraineeComponent } from './trainee/trainee.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { SearchcoachesPipe } from './searchcoaches/searchcoaches.pipe';

import { CoachsService } from '../shared/coachs.service';
import { LoginComponent } from './login/login.component';
import { UserService } from 'src/shared/user.service';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    CoachesComponent,
    CoachComponent,
    TraineeComponent,
    AgendaComponent,
    MenuMainComponent,
    SearchcoachesPipe,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    CoachsService,
    UserService,
    HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
