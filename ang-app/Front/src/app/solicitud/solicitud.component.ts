import { Component } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent {
  dependencias=[
    {desc:"Psicología"},
    {desc:"Proyecto Curricular"},
    {desc:"Permanencia"},
    {desc:"Asesorías"}
  ]
}
