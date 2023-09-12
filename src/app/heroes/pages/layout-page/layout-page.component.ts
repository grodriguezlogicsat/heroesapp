import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems= [
    {label:'Listado', icon:'label', url:'./list'},
    {label:'Añadir', icon:'add', url:'./new-hero'},
    {label:'Buscar', icon:'search', url:'./search'},
  ]

  constructor(
    private route: Router,
    private autService: AuthService,
    ){}

    get user():User | undefined{
      return this.autService.currentUser;
    }

    onLogout():void{
      this.autService.logout();
      this.route.navigate(['/auth/login'])
    }
}
