import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-codigo-alumno-qr',
  templateUrl: './codigo-alumno-qr.page.html',
  styleUrls: ['./codigo-alumno-qr.page.scss'],
})
export class CodigoAlumnoQrPage implements OnInit {
  time : BehaviorSubject<string> = new BehaviorSubject('00:00');
  constructor() { }

tiempo: number;

  ngOnInit() {
  }
  reloj(duracion :number){ 
  this.tiempo = duracion * 60
  setInterval( ()=> { 
  this.actualizaciontiempo()
  },1000)
  }

  actualizaciontiempo() { 
    let minutos = Math.floor(this.tiempo / 60);
    let segundos = this.tiempo % 60;
  
    const minutosString = ('0' + minutos).slice(-2);
    const segundosString = ('0' + segundos).slice(-2);
  
    const text = minutosString + ':' + segundosString;
    this.time.next(text);
  
    --this.tiempo;

    if (this.tiempo < 0) {
      this.reloj(2); 
    }
  }
}
