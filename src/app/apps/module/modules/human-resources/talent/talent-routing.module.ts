import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalentProfileComponent } from './talent-profile/talent-profile.component';
import { TalentResumeComponent } from './talent-resume/talent-resume.component';
import { TalentMasterComponent } from './talent-master/talent-master.component';

const routes: Routes = [
  {
    path: 'talent-profile',
    component:TalentProfileComponent
  },
  {
    path: 'talent-master',
    component:TalentMasterComponent
  },
  {
    path: 'talent-resume',
    component:TalentResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentRoutingModule { }
