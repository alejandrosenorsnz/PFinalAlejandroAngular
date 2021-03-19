import { DetallecicloComponent } from './components/detalleciclo/detalleciclo.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';

const routes: Routes = [
  {path :'home',component:HomeComponent},
  {path :'ciclos',component:CiclosComponent},
  {path :'asignaturas',component:AsignaturasComponent},
  {path : 'detalleciclo/:asignaturas/:ciclos',component:DetallecicloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
