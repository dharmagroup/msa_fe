import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { RecommendedComponent } from './recommended/recommended.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recommended',
    pathMatch: 'full',
  },
 
  {
    path: 'recommended',
    component: RecommendedComponent
  },
  {
    path: 'manufacture',
    loadChildren: ()=> import('./manufacture/manufacture.module').then((m)=> m.ManufactureModule)
  },
  {
    path: 'human-resources',
    loadChildren: ()=> import('./human-resources/human-resources.module').then((m)=> m.HumanResourcesModule)
  },
  {
    path: '**',
    redirectTo: 'recommended',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
