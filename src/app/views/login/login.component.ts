import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'
import { User} from '../../models/user'
import { ServicesProvider } from '../../config/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent { 

  constructor(private authService: AuthService, private router: Router, private serviceProvider:ServicesProvider){

  }

  onLogin(form) :void{
    console.log('Login', form.value)
    this.authService.login(form.value).subscribe(res => {
      this.serviceProvider.fn_generarAlerta("exito", "exito")
      this.router.navigateByUrl('/dashboard')
      
    })
  }
 }
