import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../Services/user';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(UserService);
  const isAdmin = authService.checkAdminRole();

  if (isAdmin) {
    router.navigate(['/']);
    return false;
  }
  return true;
};
