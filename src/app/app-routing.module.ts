import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoachesComponent } from './coaches/coaches.component';
import { CoachComponent } from './coach/coach.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes : Routes = [
  {path: 'coaches', component: CoachesComponent, data: { title: 'Coaches'}},
  {path: 'agenda', component: AgendaComponent, data: { title: 'Agenda'}},
  {path: 'admin', component: AdminComponent, data: { title: 'Admin'}},
  {path: 'coaches/:id', component: CoachComponent, data: { title: 'Coach Profile'}},
  {path: '', redirectTo: '/coaches', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent, data: { title: 'Signup'}},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
