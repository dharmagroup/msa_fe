import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSubject = new BehaviorSubject<{ type: string,title: string, message: string } | null>(null);
  alert$ = this.alertSubject.asObservable();

  showAlert(type: 'danger' | 'warning' | 'primary' | 'success' | 'info',title: string, message: string) {
    this.alertSubject.next({ type, title, message });
    // setTimeout(() => this.clearAlert(), 500000); // Auto hide after 5 seconds
  }

  clearAlert() {
    this.alertSubject.next(null);
  }

  
}
