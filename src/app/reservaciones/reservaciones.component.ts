import { Component, OnInit } from '@angular/core';
import { SalasService } from '../salas.service';
import { Observable, Subscriber } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})

export class ReservacionesComponent implements OnInit {
  tablaSala : any;

  constructor(private salasService: SalasService) { 
    
  }

  ngOnInit(){
    this.GetSala();
    console.log(this.tablaSala);
  }

  GetSala() : void{
    this.salasService.getAll().subscribe(data => {
      console.log(data);
      this.tablaSala = data;
    });
  }
}


