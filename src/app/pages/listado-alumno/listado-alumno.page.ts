import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-alumno',
  templateUrl: './listado-alumno.page.html',
  styleUrls: ['./listado-alumno.page.scss'],

})
export class ListadoAlumnoPage implements OnInit {
  menuType: string = 'overlay';
  constructor() { }

  usuario2: string | null = '';

  ngOnInit(){
    this.usuario2 = localStorage.getItem('usuario2');
  } 
  

}
