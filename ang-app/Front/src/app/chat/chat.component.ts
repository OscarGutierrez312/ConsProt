import { Component, ContentChild } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages=[
    {from:"Origen de Prueba",
    subject:"Asunto de Prueba",
    content:"Contenido de Prueba"},
    {from:"Origen de Prueba2",
    subject:"Asunto de Prueba2",
    content:"Contenido de Prueba2"},
    {from:"Origen de Prueba3",
    subject:"Asunto de Prueba3",
    content:"Contenido de Prueba3"},
    {from:"Origen de Prueba4",
    subject:"Asunto de Prueba4",
    content:"Contenido de Prueba4"},
    {from:"Origen de Prueba5",
    subject:"Asunto de Prueba5",
    content:"Contenido de Prueba5"}
  ]
}
