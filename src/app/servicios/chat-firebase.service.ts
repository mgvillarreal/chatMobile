import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Mensaje } from '../clases/mensaje';

@Injectable({
  providedIn: 'root'
})
export class ChatFirebaseService {

  constructor(public firestore: AngularFirestore) { }

  traerColeccion(){
    var mensajes = this.firestore.collection('mensajes', ref=>ref.orderBy('fecha','asc'));
    return mensajes.valueChanges();
  }

  setMensaje(mensajeNuevo: Mensaje){
    var mensajeRef = this.firestore.collection('mensajes');
    mensajeRef.add(mensajeNuevo);
  }
  
}
