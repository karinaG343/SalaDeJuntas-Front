import { Component } from '@angular/core';
import { SalasService } from '../salas.service';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})

export class SalasComponent {
  constructor(private salasService: SalasService) { 
    
  }
}
