import { Component, OnInit } from '@angular/core';
import { SalasService } from '../salas.service';
import { ReservacionesService } from '../reservaciones.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})

export class ReservacionesComponent implements OnInit {
  tablaSala : any;
  formReservaciones : FormGroup;
  tablaReservaciones: any;
  constructor(private salasService: SalasService, private fb : FormBuilder, private toastr : ToastrService, private reservacionService: ReservacionesService) { 
    this.formReservaciones = this.fb.group({
      sala:['', Validators.required],
      fecha_inicio:['', Validators.required],
      fecha_fin:['', Validators.required]
    });
  }

  ngOnInit(){
    this.GetSala();
    this.GetReservaciones();
  }

  GetSala() : void{
    this.salasService.getAll().subscribe(data => {
      console.log(data);
      this.tablaSala = data;
    });
  }

  SetReservaciones() : void{
    const reservacion = {Id_sala:this.formReservaciones.value.sala, fecha_hora_inicial:this.formReservaciones.value.fecha_inicio, 
      fecha_hora_final:this.formReservaciones.value.fecha_fin};
    console.log(reservacion);
    this.reservacionService.create(reservacion).subscribe(data => {
      console.log(data);
      this.toastr.success('Reservación con exito', 'Titulo');
      this.GetReservaciones();
    }, error => {
      console.log(error);
      this.toastr.error(error.error.detail,'Titulo');
    });
  }

  GetReservaciones() : void{
    this.reservacionService.getAll().subscribe(data => {
      console.log(data);
      this.tablaReservaciones = data;
    });
  }

  LiberarReservacion(reservacion:any): void{
    const salaReservacion = {id: reservacion.id, id_sala: reservacion.id_sala, fecha_hora_inicial: reservacion.fecha_hora_inicial, 
      fecha_hora_final: reservacion.fecha_hora_final, liberado: true};
      console.log(salaReservacion);
    this.reservacionService.update(reservacion.id, salaReservacion).subscribe(data => {
    this.GetReservaciones();
    this.toastr.success('Liberado con exito', 'Titulo');
    console.log(data);
    }, error => {
    this.toastr.error(error.error.detail, 'Titulo');
    console.log(error);
    });
  }
}


