import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoachesComponent } from './coaches/coaches.component';
import { CoachComponent } from './coach/coach.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  {path: 'coaches', component: CoachesComponent, canActivate: [AuthGuard], data: { title: 'Coaches'}},
  {path: 'agenda', component: AgendaComponent, canActivate: [AuthGuard], data: { title: 'Agenda'}},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { title: 'Admin'}},
  {path: 'coaches/:id', component: CoachComponent, canActivate: [AuthGuard], data: { title: 'Coach Profile'}},
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent, data: { title: 'Signup'}},
  {path: 'signin', component: SigninComponent, data: { title: 'Signin'}},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
