import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AsignaturacicloserviceService } from 'src/app/services/asignaturaservice.service';
import { CicloserviceService } from 'src/app/services/cicloservice.service';
import { asignatura } from 'src/app/utils/asignatura';
import { ciclo } from 'src/app/utils/ciclo';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})

export class CiclosComponent implements OnInit {

  asignaturas: asignatura[] = []
  asignaturaFiltroDam: asignatura[] = []
  asignaturaFiltroDaw: asignatura[] = []
  ciclos : ciclo [] =[]

  constructor(private ServicioAsignaturas: AsignaturacicloserviceService, private ServicioCiclos: CicloserviceService, private rutadetalle: Router) { 

    this.asignaturas = ServicioAsignaturas.getAsignaturas();
    this.ciclos = ServicioCiclos.getCiclos();
    this.asignaturaFiltroDam = ServicioAsignaturas.getAsignaturasDam();
    this.asignaturaFiltroDaw = ServicioAsignaturas.getAsignaturasDaw();

  }

  ngOnInit(): void {
  }

  getInfoDetalle(curso: number, nombre: string){

    this.rutadetalle.navigate(['detalleciclo', curso, nombre]);

  }

}
