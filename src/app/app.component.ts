import { Component } from '@angular/core';
import { TabService } from './services/tab.service';
import { IStaticMethods } from 'preline/preline';
import { NavigationEnd, Router, NavigationStart } from '@angular/router';
import { AlertService } from './services/alert.service';
import { LoadingService } from './services/loading.service';
declare global {
  interface HSStaticMethods {
    autoInit(): void
  }
  interface Window {
    HSStaticMethods: HSStaticMethods
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Modulo';
  constructor(private tabService: TabService,private router: Router, private loading: LoadingService) { 
    // this.addNewTab('Recommended Apps','/apps/modules/recommended');
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.loading.show('Loading...')
      }else if(event instanceof NavigationEnd) {
        this.loading.hide()
      }
     
    });
  }

  addNewTab(name: string, path: string): void {
    this.tabService.addTab(name, path);   
  }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    });
  }
}
