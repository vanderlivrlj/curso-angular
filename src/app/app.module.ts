import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CursosModule} from "./cursos/cursos.module";
import { DataBindingComponent } from './data-binding/data-binding.component';
import {FormsModule} from "@angular/forms";
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNglassComponent } from './diretiva-nglass/diretiva-nglass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import {CursosService} from "./cursos-service/cursos.service";
import {CriarCursoModule} from "./criar-curso/criar-curso.module";
import {CursosServiceModule} from "./cursos-service/cursos-service.module";
import {LogService} from "./shared/log.service";


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNglassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    ExemploNgContentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    FormsModule,
    CursosServiceModule,
    CriarCursoModule
  ],
  exports: [
    CursosServiceModule,
    CriarCursoModule
  ],
  providers: [LogService],
 // providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
