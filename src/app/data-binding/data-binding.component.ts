import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string =  'http://www.google.com';
  urlImagem: string = 'http://lorempixel.com.br/500/400/?2';
  cursoAngular: boolean = true;
  valorAtual: string = '';
  valorSalvo: any;

  isMouseOver: boolean = false;

  nome: string ='abc';

  pessoa = {
    nome: 'def',
    idade: 15,
    end:{
      cidade: 'luziania'
    }
  }

  nomeDoCurso = 'Angular';

  valorInicial = 15;

  evento: number = 10;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado')
  }

  salvarValor(valor:any){
    this.valorSalvo = valor;
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(valor: number){
    console.log(valor)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
