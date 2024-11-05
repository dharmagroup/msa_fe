import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadSubject = new BehaviorSubject<{ show: boolean, message : string} | null>(null);
  load$ = this.loadSubject.asObservable();
  messages : string | null = "Loading...";
  show(message: string){
    this.messages = message
    this.loadSubject.next({ show: true, message: message ?? 'Loading...' });
  }

  hide(){
    this.loadSubject.next({ show: false, message: this.messages ?? 'Loading...' });
  }
}
