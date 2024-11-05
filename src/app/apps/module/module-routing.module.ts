import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { SettingsComponent } from './settings/settings.component';
import { ModuleComponent } from './module.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'modules',
    pathMatch: 'full',
  },
  {
    path: 'modules',
    component: ModuleComponent,
    loadChildren: () => import('./modules/modules.module').then((modules) => modules.ModulesModule)
  },
  {
    path: 'messages',
    component: ChatComponent
  },
  {
    path: 'settings',
    component: SettingsComponent,
    loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule)
  },
  {
    path:'**',
    redirectTo: 'modules',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
