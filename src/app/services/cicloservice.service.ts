import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { ciclo } from '../utils/ciclo';

@Injectable({
  providedIn: 'root'
})

export class CicloserviceService {

  ciclos: ciclo[] = [
    {
      nombre: 'DAM',
      curso: 1,
      asignaturas: [],
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAM',
      curso: 2,
      asignaturas: [],
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 1,
      asignaturas: [],
      imagen: 'assets/images/daw.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 2,
      asignaturas: [],
      imagen: 'assets/images/daw.jpeg',
    },
  ]

  constructor() { }

  getCiclos(): ciclo[] {
    return this.ciclos;
  }

}
