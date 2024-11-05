import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private router: Router, private http: HttpClient, private auth: AuthService, private load: LoadingService) { }

  baseUrl = "https://msa-be.dharmagroup.co.id/api/"

  logout() {
    this.load.show('is terminating the session...')
    this.http.post(this.baseUrl + 'signout', {}, {
      headers: {
        'token': this.auth.getToken()
      }
    }).subscribe((resp: any) => {
      this.load.hide()
      localStorage.clear();
      this.router.navigate(['/sessions/login']);
    }, (error: any) => {
      this.load.hide()
    })
  }

  signin(data: any) {
    return this.http.post(this.baseUrl + 'signin', data)
  }

  loadModules(): Observable<any> {
    return this.http.post(this.baseUrl + 'modules', {}, {
      headers: {
        'token': this.auth.getToken()
      }
    })
  }

  post(path: string, data: any) {
    return this.http.post(this.baseUrl + path, data, {
      headers: {
        'token': this.auth.getToken()
      }
    })
  }

  get(path: string) {
    return this.http.get(this.baseUrl + path, {
      headers: {
        'token': this.auth.getToken()
      }
    })
  }
  
  request(path: string) {
    return this.http.get(path, {
      headers: {
        'token': this.auth.getToken()
      }
    })
  }

}
