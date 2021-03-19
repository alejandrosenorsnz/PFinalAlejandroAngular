import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { DetallecicloComponent } from './components/detalleciclo/detalleciclo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CiclosComponent,
    AsignaturasComponent,
    DetallecicloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
