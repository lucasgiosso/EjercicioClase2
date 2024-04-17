import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  nombre: string = '';
  clave: string = '';
  repetirClave: string = '';
  username: string = '';
  email: string = '';

  constructor(private router: Router) {}

  registro() 
  {
    if (!this.nombre || !this.clave || !this.repetirClave || !this.username || !this.email) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos obligatorios.'
      });
      return; 
    }
  
    if (this.clave !== this.repetirClave) 
      {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden. Por favor, inténtalo de nuevo.'
      });
      return; 
        }

    const usuario = {nombre: this.nombre, clave: this.clave, repetirClave: this.repetirClave, username: this.username, email: this.email};
    localStorage.setItem("usuario", JSON.stringify(usuario));
  
    this.nombre = '';
    this.clave = '';
    this.repetirClave = '';
    this.username = '';
    this.email = '';
  
    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      text: '¡Tu cuenta ha sido creada correctamente!'
    });
  
    this.router.navigate(['/login']);
  }
  
  goToLogin(){
    this.router.navigate(['/login']);
  }
}
