import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'x-auth-token'; // Nama key untuk menyimpan token di local storage

  constructor() {}

  // Simulasi metode untuk menyimpan token
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Metode untuk menghapus token
  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Metode untuk memeriksa keberadaan token
  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token; // Mengembalikan true jika token ada, false jika tidak
  }

  getToken() : string{
    if(this.isAuthenticated()){
      const token = localStorage.getItem(this.tokenKey)?.toString() ?? '';
      return token;    
    }
    return "";
  }
  
 
}
