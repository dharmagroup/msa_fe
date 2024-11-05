import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { RecommendedComponent } from './recommended/recommended.component';


@NgModule({
  declarations: [
    ModulesComponent,
    RecommendedComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
