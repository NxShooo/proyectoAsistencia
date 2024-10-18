import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-lista-curso-profesor',
  templateUrl: './lista-curso-profesor.page.html',
  styleUrls: ['./lista-curso-profesor.page.scss'],
})
export class ListaCursoProfesorPage implements OnInit {

  constructor() { }
  usuario1: string | null = '';
  ngOnInit() {
    this.usuario1 = localStorage.getItem('usuario1');
  }

}
