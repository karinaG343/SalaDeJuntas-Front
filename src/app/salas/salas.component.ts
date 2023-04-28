import { Component, OnInit } from '@angular/core';
import { SalasService } from '../salas.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})

export class SalasComponent implements OnInit {
  salaForm : FormGroup;
  tablaSala : any;
  sala : any;
  id : number | undefined;
  accion = 'Guardar';

  constructor(private salasService: SalasService, private fb : FormBuilder, private toastr : ToastrService) { 
    this.salaForm = this.fb.group({
      sala:['', Validators.required]
    })
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

  DeleteSala(id:any) : void{
    this.salasService.delete(id).subscribe(data => {
      this.toastr.success("Borrado con exito", "Titulo");
      this.GetSala();
    });
  }

  SetSala() : void{
    const nombre_sala = this.salaForm.value.nombre;
    const salaObj = {nombre_sala : this.salaForm.value.sala};
    const salaObjPut = {id : this.id, nombre_sala : this.salaForm.value.sala};
    if(this.id == undefined){
      this.salasService.create(salaObj).subscribe(data => {
        this.toastr.success("Sala creada", "Titulo");
        this.salaForm.reset();
        this.GetSala();
      }, error => {
        this.toastr.error("Error sala no creada", "Titulo");
      }
      );
      console.log(this.salaForm);
    }else{
      this.salasService.update(this.id, salaObjPut).subscribe(data => {
        this.toastr.success("Sala actualizada", "Titulo");
        this.salaForm.reset();
        this.GetSala();
        this.id = undefined;
        this.accion = "Guardar";
      }, error => {
        this.toastr.error("Error no se actualizo la sala");
        console.log(this.id, salaObjPut, error);
      });
    }
  }

  PutSala(sala:any) : void{
    console.log(sala);
    this.salaForm.patchValue({sala:sala.nombre_sala});
    this.id = sala.id;
    this.accion = "Actualizar";
  }

}
