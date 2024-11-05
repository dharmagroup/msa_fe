import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AndonRoutingModule } from './andon-routing.module';
import { DisplayComponent } from './display/display.component';
import { TriggerComponent } from './trigger/trigger.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportComponent } from './report/report.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material-em';


@NgModule({
  declarations: [
    DisplayComponent,
    TriggerComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    AndonRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot()
  ]
})
export class AndonModule { }
