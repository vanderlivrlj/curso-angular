import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosServiceComponent } from "./cursos-service.component";
import { CursosService } from "../cursos-service/cursos.service";

@NgModule({
  declarations: [
    CursosServiceComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [CursosServiceComponent],
  //currproviders: [CursosService]
})
export class CursosServiceModule { }
