import { Component, inject as injects } from '@angular/core';
import { TabService } from '../../services/tab.service';
import { Module } from '../../models/module.model';
import { ModuleService } from '../../services/module.service';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {

  constructor(private tabService: TabService, private modul: ModuleService, private router: Router, public api: ApiService) {
    this.modules = this.modul.getModules()
  }

  modules: Module[] = [];

  addNewTab(name: string, path: string, haveChildren: boolean = false): void {
    if (!haveChildren) {
      if (path) {
        this.tabService.addTab(name, path);
      }
    }
  }
  
  isActive(route: string): boolean {
    return this.router.url.startsWith(route);
  }
}
