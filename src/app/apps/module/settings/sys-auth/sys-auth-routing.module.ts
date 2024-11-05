import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {
    path: 'roles',
    component: RolesComponent
  },
  {
    path: 'user',
    component: UserAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysAuthRoutingModule { }
