import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoachesComponent } from './coaches/coaches.component';
import { CoachComponent } from './coach/coach.component';
import { TraineeComponent } from './trainee/trainee.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AppRoutingModule } from './/app-routing.module';
import { MenuMainComponent } from './menu-main/menu-main.component';

@NgModule({
  declarations: [
    AppComponent,
    CoachesComponent,
    CoachComponent,
    TraineeComponent,
    AgendaComponent,
    MenuMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
