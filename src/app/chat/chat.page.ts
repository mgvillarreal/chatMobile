import { Component, OnInit } from '@angular/core';
import { ChatFirebaseService } from '../servicios/chat-firebase.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public mensaje:Array<any> = new Array<any>();

  constructor(private firestoreApp: ChatFirebaseService) {
    firestoreApp.traerColeccion().subscribe(t=>
      {
        this.mensaje = [];
        (<Array<any>>t).forEach(element =>
          this.mensaje.push(element)
        )
        console.log("mensaje: ", this.mensaje);
      }
    );
  }

  ngOnInit() {
  }

}
