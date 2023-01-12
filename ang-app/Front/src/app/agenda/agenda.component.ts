import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {
    selectedDate!: Date | null;
    value = '';
    horas=[
      {desc:"12"}, {desc:"1"}, {desc:"2"},
      {desc:"3"}, {desc:"4"}, {desc:"5"},
      {desc:"6"}, {desc:"7"}, {desc:"8"},
      {desc:"9"}, {desc:"10"}, {desc:"11"}
    ];
    mins=[
      {desc:":10"}, {desc:":15"}, {desc:":20"},
      {desc:":25"}, {desc:":30"}, {desc:":35"},
      {desc:":40"}, {desc:":45"}, {desc:":50"}
    ];
    time=[
      {desc:"AM"}, {desc:"PM"}
    ];
}
