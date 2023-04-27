import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalasComponent } from './salas/salas.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo:'/reservaciones', pathMatch: 'full' },
    { path: 'salas', component: SalasComponent },
    { path: 'reservaciones', component: ReservacionesComponent},
    { path: '**', redirectTo:'/reservaciones', pathMatch: 'full' }
  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
