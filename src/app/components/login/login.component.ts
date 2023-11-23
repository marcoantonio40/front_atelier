import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credentials } from 'src/app/models/credentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

creds: Credentials = {
  login:'',
  password: ''
}

login = new FormControl(null, Validators.email);
password = new FormControl(null, Validators.minLength(8));

constructor(
  private toast: ToastrService,
  private service: AuthService,
  private router: Router
  ){}
  
ngOnInit(): void {
    
}

doLogin(){
  this.service.authenticate(this.creds).subscribe(response => {
   localStorage.clear();
   this.service.successfulLogin(response.token);
   this.router.navigate(['']) 
  }, () => {
    this.toast.error('E-mail e/ou senha inválidos')
  })
}

validFields(): boolean{
  return (this.login.valid && this.password.valid);
}

}
