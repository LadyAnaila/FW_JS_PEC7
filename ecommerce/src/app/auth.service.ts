import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'admin', password: 'admin' },
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ];

  authenticate(username: string, password: string): boolean {
    return this.users.some(user => user.username === username && user.password === password);
  }

  register(username: string, password: string): boolean {
    const userExists = this.users.some(user => user.username === username);
    if (userExists) {
      return false; // Usuario ya existe
    }
    this.users.push({ username, password });
    return true; // Registro exitoso
  }
}
