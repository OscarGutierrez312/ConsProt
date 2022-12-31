import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { AgendaComponent } from './agenda/agenda.component';
import { InfoComponent } from './info/info.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:"inicio", component:InicioComponent},
  {path:"solicitud", component:SolicitudComponent},
  {path:"agenda", component:AgendaComponent},
  {path:"info", component:InfoComponent},
  {path:"registro", component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents=[InicioComponent, SolicitudComponent, AgendaComponent, InfoComponent, RegistroComponent]
