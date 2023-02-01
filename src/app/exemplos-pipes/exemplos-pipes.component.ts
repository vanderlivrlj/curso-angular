import { Component, OnInit } from '@angular/core';
import {interval, map, Observable} from "rxjs";

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: '4.54231',
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016,5,23),
    url: 'http://a.co/glgjpRp'
  }

   livros: string []  = ['Java', 'Angular 2', 'PHP'];

  filtro: string  = '';
  constructor() { }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  })

  ngOnInit(): void {
  }

  obterCursos(){
    if (this.livros.length === 0 || this.filtro === null || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter((v) => {
      if (v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    });
  }
  addCurso(valor: string){
    this.livros.push(valor);
    console.log(this.livros)
  }

}
