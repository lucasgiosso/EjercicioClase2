import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuarios } from '../../clases/usuarios';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  email: string = '';
  clave: string = '';
  usuario: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void{
    const objUsuario = localStorage.getItem("usuario") ?? "";
    this.usuario = JSON.parse(objUsuario)
  }

  login() {

    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario') || '{}') as Usuarios;

    if (usuarioGuardado.email === this.email && usuarioGuardado.clave === this.clave) {

      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/bienvenido']);
    } else {

      this.email = '';
      this.clave = '';
  
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ha habido un error en el ingreso de datos. Por favor, verifica tus credenciales.'
      });
    }
  }
  

  register(){
    this.router.navigate(['/register']);
  }
}

