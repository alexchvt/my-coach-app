import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoachesComponent } from './coaches/coaches.component';
import { CoachComponent } from './coach/coach.component';
import { TraineeComponent } from './trainee/trainee.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { SearchcoachesPipe } from './searchcoaches/searchcoaches.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoachesComponent,
    CoachComponent,
    TraineeComponent,
    AgendaComponent,
    MenuMainComponent,
    SearchcoachesPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
