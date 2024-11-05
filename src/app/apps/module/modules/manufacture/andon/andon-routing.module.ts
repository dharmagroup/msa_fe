import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { TriggerComponent } from './trigger/trigger.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: 'display',
    component: DisplayComponent
  },
  {
    path: 'trigger',
    component: TriggerComponent
  },
  {
    path: 'report',
    component: ReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AndonRoutingModule { }
