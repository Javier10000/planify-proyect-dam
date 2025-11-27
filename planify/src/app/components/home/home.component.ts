import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = '@javierverdugo';
    edad = 40;

  esMayorEdad=true;

  articulos = [
  { codigo: 1, descripcion: 'naranjas', precio: 3 },
  { codigo: 2, descripcion: 'manzanas', precio: 5 },
  { codigo: 3, descripcion: 'peras', precio: 1 },
  { codigo: 4, descripcion: 'plátanos', precio: 2 },
  { codigo: 5, descripcion: 'kiwis', precio: 4 },
  { codigo: 6, descripcion: 'uvas', precio: 3 },
  ];
  
  numeroAleatorio(){
    return Math.floor(Math.random()*3)+1;
  }
}
