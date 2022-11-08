import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Mensaje } from '../clases/mensaje';
import { ChatFirebaseService } from '../servicios/chat-firebase.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss']
})
export class ChatPage implements OnInit {

  public mensaje:Array<any> = new Array<any>();
  mensajeChat = new Mensaje;

  nuevoMensaje:string = "";
  usuarioLogueado:string;

  constructor(private firestoreApp: ChatFirebaseService) {
    firestoreApp.traerColeccion().subscribe(t=>
      {
        this.mensaje = [];
        (<Array<any>>t).forEach(element =>
          this.mensaje.push(element)
        )
        console.log("Mensajes traidos: ", this.mensaje);
      }
    );
  }

  ngOnInit() {
    this.obtenerUsuarioLogeado();
  }

  enviarMensaje():void{

    //if(this.nuevoMensaje == "" ) return;

    let datosUsuario = JSON.parse(localStorage.getItem('usuarioMobile'));
    this.mensajeChat.usuario = datosUsuario.email;
    this.mensajeChat.nickname = datosUsuario.nickname;
    this.mensajeChat.fecha = new Date;
    this.mensajeChat.texto = this.nuevoMensaje;

    console.log("Mensaje enviado: ", this.mensajeChat);

    this.firestoreApp.setMensaje(JSON.parse(JSON.stringify(this.mensajeChat)));

    this.nuevoMensaje = "";

  }

  obtenerUsuarioLogeado():void{
    if(localStorage.getItem('usuarioMobile') !== null){
      let datosUsuario = JSON.parse(localStorage.getItem('usuarioMobile'));
      this.usuarioLogueado = datosUsuario.email;

      console.log("Mail logueado chat mobile: ", this.usuarioLogueado);
    }
  }

}
