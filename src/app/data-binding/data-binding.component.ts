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

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
