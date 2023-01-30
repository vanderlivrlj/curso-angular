import { Component, OnInit } from '@angular/core';
import {CursosService} from "../cursos-service/cursos.service";

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss'],
  //Para chamar dentro do componente, gerando mais de uma instância
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

  cursos: string [] = [];

  constructor( private _cursosService: CursosService ) { }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();
  }

  onAddCurso(curso: string){
    this._cursosService.addCurso(curso)
  }

}
