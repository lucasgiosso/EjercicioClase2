import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})
export class BienvenidoComponent implements OnInit{

  nombre: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {

    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario') || '{}');
    this.nombre = usuarioGuardado.username || '';
  }

  back() {
    this.router.navigate(['/login']);
  }

}
