import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppsComponent } from './apps.component';

const routes: Routes = [
  {
    path: '',
    component: AppsComponent,
    loadChildren: () => import('./module/module.module').then((m) => m.ModuleModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
