import { Routes, RouterModule } from '@angular/router';
import { DoorInfoCardComponent } from './door-info-card/door-info-card.component';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';

export const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'doorInfo', component: DoorInfoCardComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
