import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { ChatComponent } from './chat/chat.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleComponent } from './module.component';


@NgModule({
  declarations: [
    ChatComponent,
    SettingsComponent,
    ModuleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModuleRoutingModule
  ]
})
export class ModuleModule { }
