import { Component, OnInit } from '@angular/core';
import {CursosService} from "../cursos-service/cursos.service";

@Component({
  selector: 'app-cursos-service',
  templateUrl: './cursos-service.component.html',
  styleUrls: ['./cursos-service.component.scss'],
  //Para chamar dentro do componente, gerando mais de uma instância
  providers: [CursosService]
})
export class CursosServiceComponent implements OnInit {

  cursos: string [] = [];

  constructor(private cursosService: CursosService) {
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    //Realizando a chamada de forma direta, realizando uma inscrição para receber uma notificação
    //de quando um evento for emitido.
    CursosService.criouNovoCurso.subscribe(
      //Arrow function para adicionar o atributo digitado nos dois componentes através de um componente
      //realizando assim o broadcast
      curso => this.cursos.push(curso)
    );
  }

}
