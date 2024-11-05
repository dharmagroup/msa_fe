import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'attendance',
    loadChildren: ()=> import('./time-attendances/time-attendances.module').then((m)=> m.TimeAttendancesModule)
  },
  {
    path: 'talent',
    loadChildren: ()=> import('./talent/talent.module').then((m)=> m.TalentModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanResourcesRoutingModule { }
