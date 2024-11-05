import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SysAuthRoutingModule } from './sys-auth-routing.module';
import { RolesComponent } from './roles/roles.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RolesComponent,
    UserAuthComponent,
  ],
  imports: [
    CommonModule,
    SysAuthRoutingModule,
    FormsModule
  ]
})
export class SysAuthModule { }
