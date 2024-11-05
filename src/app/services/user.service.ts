import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User | null = null; // Menginisialisasi dengan null

  setUser(user: User): void {
    this.user = user;
  }

  getUser(): User | null {
    return this.user;
  }
}
