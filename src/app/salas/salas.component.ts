import { Component } from '@angular/core';
import { SalasService } from '../salas.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})

export class SalasComponent {
  salaForm : FormGroup;
  tablaSala : any;

  constructor(private salasService: SalasService, private fb : FormBuilder, private toastr : ToastrService) { 
    this.salaForm = this.fb.group({
      sala:['', Validators.required]
    })
  }

  GetSala() : void{
    this.salasService.getAll().subscribe(data => {
      console.log(data);
      this.tablaSala = data;
    });
  }

  DeleteSala(id:any) : void{
    this.salasService.delete(id).subscribe(data => {
      this.toastr.success("Borrado con exito", "Titulo");
      this.GetSala();
    });
  }

  SetSala() : void{
    const nombre_sala = this.salaForm.value.nombre;
    const salaObj = {nombre_sala : this.salaForm.value.sala}
    this.salasService.create(salaObj).subscribe(data => {
      this.toastr.success("Sala creada", "Titulo");
      this.salaForm.reset();
      this.GetSala();
    }, error => {
      this.toastr.error("Error sala no creada", "Titulo");
    }
    );
    console.log(this.salaForm);
  }
}
