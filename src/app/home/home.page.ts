import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../clases/usuario';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  emailMobile: string = '';
  nicknameMobile: string = '';
  miUsuario = new Usuario;

  constructor(private router: Router) {}

  guardaUsuario(){
    this.miUsuario.email = this.emailMobile;
    this.miUsuario.nickname = this.nicknameMobile;
    console.log('Usuario mobile: ', this.miUsuario);
    localStorage.setItem("usuarioMobile",JSON.stringify(this.miUsuario));
    this.router.navigate(['chat']);
  }

}
