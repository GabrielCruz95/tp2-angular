import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  estudianteActual: Estudiante = {
    nombre: 'Gabriel',
    edad: 22,
    nota: 8
  };
  listaEstudiantes: Estudiante[] = [
    {
      nombre: 'José',
      edad: 22,
      nota: 6,
    },
    {
      nombre: 'Monica',
      edad: 25,
      nota: 2
    },
    {
      nombre: 'Edgardo',
      edad: 30,
    nota: 2
    },
    {
      nombre: 'Leticia',
      edad: 28,
      nota: 6
    },
    {
      nombre: 'Elian',
      edad: 26,
    nota: 7
    },
    {
      nombre: 'Roberto',
      edad: 22,
      nota: 4
    },
    {
      nombre: 'Marta',
      edad: 23,
    nota: 8
    },

  ];

}
