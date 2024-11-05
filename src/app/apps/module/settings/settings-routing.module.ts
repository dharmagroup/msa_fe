import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./sys-auth/sys-auth.module').then((m) => m.SysAuthModule)
  },
  {
    path: 'modules',
    loadChildren: () => import('./sys-modules/sys-modules.module').then((m) => m.SysModulesModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
