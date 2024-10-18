import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-profe',
  templateUrl: './listado-profe.page.html',
  styleUrls: ['./listado-profe.page.scss'],
})
export class ListadoProfePage implements OnInit {

  constructor() { }

  usuario1: string | null = '';

  ngOnInit() {
    this.usuario1 = localStorage.getItem('usuario1');
  }

}
