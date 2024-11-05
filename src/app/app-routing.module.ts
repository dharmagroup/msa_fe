// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


const routes: Routes = [
  {
    path: 'apps',
    loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule),
    canActivate: [authGuard] // Menggunakan guard fungsional di sini
  },
  {
    path: 'sessions',
    loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule)
  },
  {
    path: '',
    redirectTo: 'sessions', // Arahkan ke rute sessions jika URL kosong
    pathMatch: 'full'      // Cocokkan dengan tepat untuk rute kosong
  },
  {
    path: '**', // Menangani rute yang tidak ditemukan
    redirectTo: 'sessions' // Arahkan kembali ke sessions jika rute tidak ditemukan
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
