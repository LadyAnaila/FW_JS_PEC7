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

  constructor() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token) {
      console.log('Token found in local storage:', token);
      this.setToken(token);
    } else {
      console.log('No token found in local storage.');
    }
  }

  authenticate(username: string, password: string): boolean {
    const authenticated = this.users.some(user => user.username === username && user.password === password);
    if (authenticated) {
      const token = 'fake-token'; // Deberías generar un token real aquí
      this.setToken(token);
      console.log('Token set in local storage:', token);
    } else {
      console.log('Authentication failed for user:', username);
    }
    return authenticated;
  }

  register(username: string, password: string): boolean {
    const userExists = this.users.some(user => user.username === username);
    if (userExists) {
      console.log('User already exists:', username);
      return false; // Usuario ya existe
    }
    this.users.push({ username, password });
    console.log('User registered successfully:', username);
    return true; // Registro exitoso
  }

  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    console.log('Token saved to local storage:', token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    console.log('Token removed from local storage.');
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    this.removeToken();
  }
}
