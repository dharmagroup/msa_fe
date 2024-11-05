import { Component } from '@angular/core';
import { TitleService } from '../../../../services/title.service';
import { Router } from '@angular/router';
import { TabService } from '../../../../services/tab.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.css'
})
export class RecommendedComponent {
  constructor(public title: TitleService, private router: Router, private tab: TabService){
  }

  ngOnInit() {
   
  }
}
