import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatFirebaseService {

  constructor(public firestore: AngularFirestore) { }

  traerColeccion(){
    var mensajes = this.firestore.collection('mensajes', ref=>ref.orderBy('fecha','asc'));
    return mensajes.valueChanges();
  }
}
