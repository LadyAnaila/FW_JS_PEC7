
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})


@Injectable({
  providedIn: 'root'
})
export class AuthStoreGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      console.log('AuthGuard#canActivate called: User is authenticated');
      return true;
    } else {
      console.log('AuthGuard#canActivate called: User is not authenticated');
      this.router.navigate(['/login']);
      return false;
    }
  }
}