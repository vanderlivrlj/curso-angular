import {Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import * as events from "events";

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  // do componente pai, para o componente filho
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter<number>();

  @ViewChild('campoInput') campoValorInput!: ElementRef;



  incrementa(valor: number){
    console.log(this.campoValorInput.nativeElement.value);
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit(this.valor)
  }
  decrementa(){
    this.campoValorInput.nativeElement.value--
    this.mudouValor.emit(this.valor)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
