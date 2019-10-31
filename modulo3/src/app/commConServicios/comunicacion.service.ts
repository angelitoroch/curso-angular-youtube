import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  //Variable encargada de portar el mensaje que se transmitira durante el servicio
  mensaje: string;
  /*La variable Subject permite enviar mensajes a multiples observadores 
  de los diferentes componenetes que se suscribieron al subject*/
  private enviarMensajeSubject = new Subject<string>();
  /*Variable auxiliar que nos ayuda a permite simplificar la sintaxis para que los componentes se puedan suscribir*/
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  //Enviar un mensaje a todos los componentes que se hayan suscrito al servicio
  enviarMensaje(mensaje: string) {
    this.mensaje = mensaje;
    this.enviarMensajeSubject.next(mensaje);
  }
}
