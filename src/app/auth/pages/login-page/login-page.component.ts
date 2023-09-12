import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LayoutPageComponent } from '../layout-page/layout-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  constructor(
    private autService: AuthService,
    private router: Router
    ){
  }

  onLogin():void{
    this.autService.login('grodriguezsosa.93@gmail.com', '123456')
    .subscribe(user =>{
      this.router.navigate(['/'])
    })
  }
}
