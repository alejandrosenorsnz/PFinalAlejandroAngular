import { ciclo } from './../../utils/ciclo';
import { element } from 'protractor';
import { conocimiento } from './../../utils/conocimiento';
import { Component, OnInit } from '@angular/core';
import { AsignaturacicloserviceService } from 'src/app/services/asignaturaservice.service';
import { asignatura } from 'src/app/utils/asignatura';
import { finished } from 'node:stream';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  asignaturas: asignatura[] = [];

  //lon: number = 0;
  //listaResult: any[] = [];
  resultado: asignatura[] = [];
  resultadodos: asignatura[] = [];
  asignaturaFiltro: string = "";
  cicloFiltro: string = "";
  conocimientoFiltro: string = "";
  lonFiltro: number = 0;

  constructor(private servicioasignatura: AsignaturacicloserviceService) { 

    //this.lon = this.asignaturas.length;
    this.asignaturas = this.servicioasignatura.getAsignaturas();
    this.resultado = this.asignaturas;
    

  }

  ngOnInit(): void {
  
    this.resultado = this.servicioasignatura.getAsignaturas();
    this.lonFiltro = this.resultado.length;
    
  }

  filtroAsignaturas(nombre: string, ciclo: string, conocimiento: string){

    this.asignaturaFiltro = nombre;
    this.cicloFiltro = ciclo;
    this.conocimientoFiltro = conocimiento;

    

    if (nombre == "" && ciclo == "" && conocimiento == "") {

      this.resultado = this.asignaturas;
      this.lonFiltro = this.resultado.length;
      
    } else if (this.asignaturaFiltro != "" && this.cicloFiltro != "" && this.conocimientoFiltro != "") {

      this.resultado = this.servicioasignatura.getFiltroNombreCicloConocimiento(this.asignaturaFiltro, this.cicloFiltro, this.conocimientoFiltro);
      this.lonFiltro = this.resultado.length;
      
    } else if (this.asignaturaFiltro != "" && this.cicloFiltro == "" && this.conocimientoFiltro == "") {

      this.resultado = this.servicioasignatura.getFiltroAsiganturasNombre(this.asignaturaFiltro);
      this.lonFiltro = this.resultado.length;
      
      
    } else if (this.asignaturaFiltro != "" && this.cicloFiltro != "" && this.conocimientoFiltro == "") {

      //this.resultado = this.servicioasignatura.getFiltroNombreCiclo(this.asignaturaFiltro, this.cicloFiltro);
      
      this.resultadodos = this.servicioasignatura.getFiltroAsiganturasNombre(this.asignaturaFiltro);
      this.resultadodos = this.servicioasignatura.getFiltroAsiganturasCiclo(this.cicloFiltro);
      //this.resultadodos = this.resultado
      this.lonFiltro = this.resultadodos.length;
      
      
    } else if (this.asignaturaFiltro == "" && this.cicloFiltro != "" && this.conocimientoFiltro == "") {

      this.resultado = this.servicioasignatura.getFiltroAsiganturasCiclo(this.cicloFiltro);
      this.lonFiltro = this.resultado.length;
      
    } else if (this.asignaturaFiltro == "" && this.cicloFiltro != "" && this.conocimientoFiltro != "") {

      
      
    } else if (this.asignaturaFiltro == "" && this.cicloFiltro == "" && this.conocimientoFiltro != "") {

      this.resultado = this.servicioasignatura.getFiltroConocimiento(this.conocimientoFiltro);
      this.lonFiltro = this.resultado.length;
      
    } else if (this.asignaturaFiltro != "" && this.cicloFiltro == "" && this.conocimientoFiltro != "") {

      
      
    }

  }

}
