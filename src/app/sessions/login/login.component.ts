import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private api: ApiService, private alert: AlertService, private auth: AuthService){
    if(this.auth.isAuthenticated()){
      this.router.navigate(['/apps'])
    }
  }

  load: boolean = false
  onSubmit() {
    if (this.form.valid) {
      this.load = true
      this.api.signin(this.form.value).subscribe((response:any)=>{
        this.load = false
        if(response.token){
          this.auth.setToken(response.token)
          this.router.navigate(['/apps'])
        }
      },(error:any)=>{
        this.load = false
        this.alert.showAlert('danger','Error',error.error.message)
      })
    }
    else{
      this.alert.showAlert('danger','Oops!', 'Please enter a valid username and password')
    }
  }
  
  form : FormGroup = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })


}
