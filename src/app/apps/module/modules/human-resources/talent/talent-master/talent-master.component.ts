import { Component } from '@angular/core';
import { DiscComponent } from '../component-talent/disc/disc.component';
import { IQMasterComponent } from '../component-talent/iqmaster/iqmaster.component';
import { PKMasterComponent } from '../component-talent/pkmaster/pkmaster.component';
import { MatrixCompetencyComponent } from '../component-talent/matrix-competency/matrix-competency.component';
import { MandatoryTrainingComponent } from '../component-talent/mandatory-training/mandatory-training.component';
import { Router } from '@angular/router';
import { HavComponent } from '../component-talent/hav/hav.component';
import { PositionProjectionComponent } from '../component-talent/position-projection/position-projection.component';
import { GradeProjectionComponent } from '../component-talent/grade-projection/grade-projection.component';


@Component({
  selector: 'app-talent-master',
  templateUrl: './talent-master.component.html',
  styleUrl: './talent-master.component.css'
})
export class TalentMasterComponent {
  routes: any[] = [
    {
      path: 'disc',
      title: 'DISC',
      icon: 'bi bi-person-circle',
      component: DiscComponent
    },
    {
      path: 'iq',
      title: 'IQ',
      icon: 'bi bi-lightbulb',
      component: IQMasterComponent
    },
    {
      path: 'pk',
      title: 'Penilaian Karya',
      icon: 'bi bi-file-earmark-text',
      component: PKMasterComponent
    },
    {
      path: 'matrix-competency',
      title: 'Matrix Competency',
      icon: 'bi bi-grid',
      component: MatrixCompetencyComponent
    },
    {
      path: 'mandatory-training',
      title: 'Mandatory Training',
      icon: 'bi bi-book',
      component: MandatoryTrainingComponent
    },
    {
      path: 'hav-map',
      title: 'HAV Map',
      icon: 'bi bi-book',
      component: HavComponent
    },
    {
      title: 'Position Projection',
      path: 'position-projection',
      icon: 'bi bi-book',
      component: PositionProjectionComponent
    },
    {
      title: 'Grade Projection',
      path: 'grade-projection',
      icon: 'bi bi-book',
      component: GradeProjectionComponent
    },
  ];

  activeRoute: any;

  constructor(private router: Router) {
    this.activeRoute = this.routes[0]; // Set default active route
  }

  navigate(path: string) {
    this.activeRoute = this.routes.find(route => route.path === path);
  }
}
