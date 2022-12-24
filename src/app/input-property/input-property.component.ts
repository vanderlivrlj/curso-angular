import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss']
})
export class InputPropertyComponent implements OnInit {

  //Desta forma o nome é utilizado para passar externamente, caso o nome da variável seja diferente.
  @Input('nome') nomeCurso: String = '';
  //Desta forma, passando o nome da variável normal.
  // @Input() nomeCurso: String = '';
  constructor() { }

  ngOnInit(): void {
  }

}
