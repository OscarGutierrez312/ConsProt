import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { SuperiorComponent } from './superior/superior.component';
import { LateralComponent } from './lateral/lateral.component';
import { InicioComponent } from './inicio/inicio.component';
import { ChatComponent } from './chat/chat.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { RegistroComponent } from './registro/registro.component';
import { AgendaComponent } from './agenda/agenda.component';
import { InfoComponent } from './info/info.component';
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,
    SuperiorComponent,
    LateralComponent,
    InicioComponent,
    ChatComponent,
    SolicitudComponent,
    RegistroComponent,
    AgendaComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatFormFieldModule,
    BrowserAnimationsModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
