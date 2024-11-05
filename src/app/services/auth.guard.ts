// src/app/guards/auth.guard.ts

import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    return true;
  } else {
    // Kamu bisa mengarahkan pengguna ke halaman login jika perlu
    router.navigate(['/sessions/login']);
    return false
  }
};
