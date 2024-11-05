import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentRoutingModule } from './talent-routing.module';
import { TalentProfileComponent } from './talent-profile/talent-profile.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { TalentResumeComponent } from './talent-resume/talent-resume.component';
import { TalentMasterComponent } from './talent-master/talent-master.component';
import { DiscComponent } from './component-talent/disc/disc.component';
import { IQMasterComponent } from './component-talent/iqmaster/iqmaster.component';
import { PKMasterComponent } from './component-talent/pkmaster/pkmaster.component';
import { MatrixCompetencyComponent } from './component-talent/matrix-competency/matrix-competency.component';
import { MandatoryTrainingComponent } from './component-talent/mandatory-training/mandatory-training.component';
import { HavComponent } from './component-talent/hav/hav.component';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { PositionProjectionComponent } from './component-talent/position-projection/position-projection.component';
import { GradeProjectionComponent } from './component-talent/grade-projection/grade-projection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
 // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'application/vnd.ms-excel'
};

@NgModule({
  declarations: [
    TalentProfileComponent,
    TalentResumeComponent,
    TalentMasterComponent,
    DiscComponent,
    IQMasterComponent,
    PKMasterComponent,
    MatrixCompetencyComponent,
    MandatoryTrainingComponent,
    HavComponent,
    PositionProjectionComponent,
    GradeProjectionComponent
  ],
  imports: [
    CommonModule,
    TalentRoutingModule,
    HighchartsChartModule, 
    DropzoneModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class TalentModule { }
