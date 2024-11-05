import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SysModulesRoutingModule } from './sys-modules-routing.module';
import { CreateAndlistComponent } from './create-andlist/create-andlist.component';
import { SetupRecommendedModuleComponent } from './setup-recommended-module/setup-recommended-module.component';



@NgModule({
  declarations: [
  
    CreateAndlistComponent,
       SetupRecommendedModuleComponent
  ],
  imports: [
    CommonModule,
    SysModulesRoutingModule
  ]
})
export class SysModulesModule { }
