import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private users = [
    { username: 'admin', password: 'admin' },
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ];

  authenticate(username: string, password: string): boolean {
    const authenticated = this.users.some(user => user.username === username && user.password === password);
    if (authenticated) {
      this.setToken('fake-token'); // Generar y almacenar un token falso
    }
    return authenticated;
  }

  register(username: string, password: string): boolean {
    const userExists = this.users.some(user => user.username === username);
    if (userExists) {
      return false; // Usuario ya existe
    }
    this.users.push({ username, password });
    return true; // Registro exitoso
  }

  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  private getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    this.removeToken();
  }
}