import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  dataSource=[
    {
      nomb:"Cálculo Diferencial",
      nota:4.11,
      obs:"Ninguna"
    }
  ]
  displayedColumns: string[] = ['Asignatura', 'Nota', 'Observación'];
}
