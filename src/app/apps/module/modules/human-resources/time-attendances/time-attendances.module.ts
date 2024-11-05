import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeAttendancesRoutingModule } from './time-attendances-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material-em';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule, 
    TimeAttendancesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot()
  ]
})
export class TimeAttendancesModule { }
