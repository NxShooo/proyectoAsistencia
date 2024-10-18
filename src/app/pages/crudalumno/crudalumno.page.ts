import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/model/Alumno';
import { CrudpersonaService } from 'src/app/servicios/crudpersona.service';
@Component({
  selector: 'app-crudalumno',
  templateUrl: './crudalumno.page.html',
  styleUrls: ['./crudalumno.page.scss'],
})
export class CrudalumnoPage implements OnInit {

  constructor(private cp:CrudpersonaService) { }
  alumno:Alumno={nombre:'',password:''}
  listaAlumno:Alumno[]=[]
  ngOnInit() {
    this.listar()
  }
  guardar(){
    this.cp.guardar(this.alumno).then(()=>{
      alert("guardado")
    }).catch((err)=>{
      console.log(err);
    })
  }
  listar(){
    this.cp.listar().subscribe(data=>{
      this.listaAlumno=data
    })
  }


}
