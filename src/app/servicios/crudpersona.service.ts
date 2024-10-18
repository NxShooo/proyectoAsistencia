import { Injectable } from '@angular/core';
import { Alumno} from '../model/Alumno'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudpersonaService {

  constructor(private afs:AngularFirestore) { }

  guardar(Alumno:Alumno){
    return this.afs.collection('alumno').add(Alumno);
  }

  listar():Observable<Alumno[]>{
    return this.afs.collection<Alumno>('alumno').valueChanges({idField:'id'})
  }
  
}
