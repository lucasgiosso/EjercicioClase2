import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,BienvenidoComponent,LoginComponent,ErrorComponent,RegisterComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title: string = 'Ejercicio Clase 01';
 
  public edadUno: string = '';
  public edadDos: string = '';
  public suma: number = 0;
  public promedio: number = 0;

  public btnSuma = 'Calcular';
  public btnLimpiar = 'Limpiar';

  public sumarEdades: number = 0;

  public calcularSumaEdadesYPromedio(event: any): void 
  {
    this.suma = +this.edadUno + +this.edadDos;
    this.promedio = +this.suma / 2;
    console.log(event);
    
  }

  public limpiar(event: any): void 
  {
    this.edadUno = '';
    this.edadDos = '';
    this.suma = 0;
    this.promedio = 0;
    console.log(event);
    
  }
}
