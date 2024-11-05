import { Component } from '@angular/core';
import { TabService } from '../services/tab.service';
import { AlertService } from '../services/alert.service';
import { ModuleService } from '../services/module.service';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrl: './apps.component.css'
})
export class AppsComponent {

  tabs: { title: string, path: string }[] = [];
  selectedTab: number = 0;
  constructor(private tabService: TabService,
    public alerts: AlertService, private user: UserService,
    private module: ModuleService,private client: ApiService) { }

  ngOnInit(): void {
    this.loadModule()
    this.tabService.tabs$.subscribe(tabs => this.tabs = tabs);
    this.tabService.selectedTab$.subscribe(index => this.selectedTab = index);
  }

  addTab(title: string, path: string): void {
    this.tabService.addTab(title, path);
  }

  removeTab(index: number): void {
    this.tabService.removeTab(index);
   
  }

  selectTab(index: number): void {
    this.tabService.selectTab(index);
  }
  
  loading : boolean = true;
  loadModule(){
    this.loading = true
    this.client.loadModules().subscribe((response:any)=>{
      this.loading = false
      this.module.setModules(response.modules)
      this.user.setUser(response.userdata)
    },(error:any)=>{
      this.loading = false
      this.alerts.showAlert('danger','Error loading modules',error.error.message)
      this.client.logout()
    })
  }
}
