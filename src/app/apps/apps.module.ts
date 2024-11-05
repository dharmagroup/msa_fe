import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { AppsComponent } from './apps.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AppsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppsRoutingModule
  ],
  bootstrap: [AppsComponent]
})
export class AppsModule { }
