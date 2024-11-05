import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAndlistComponent } from './create-andlist/create-andlist.component';
import { SetupRecommendedModuleComponent } from './setup-recommended-module/setup-recommended-module.component';

const routes: Routes = [
  {
    path: 'create-and-list',
    component: CreateAndlistComponent
  },
  {
    path: 'setup-recommended',
    component: SetupRecommendedModuleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysModulesRoutingModule { }
