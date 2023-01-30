import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-nglass',
  templateUrl: './diretiva-nglass.component.html',
  styleUrls: ['./diretiva-nglass.component.scss']
})
export class DiretivaNglassComponent implements OnInit {

  meuFavorito: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.meuFavorito =  !this.meuFavorito;
  }

}
