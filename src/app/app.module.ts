import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { SalasComponent } from './salas/salas.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservacionesComponent,
    SalasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
