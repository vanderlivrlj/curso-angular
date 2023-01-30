import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementeRef: ElementRef,
              private _renderer: Renderer2) {
    //Tem uma falha de segurança usando desta forma. Ataques do tipo XXS
    //this._elementeRef.nativeElement.style.backgroundColor = 'yellow';
    //Seguindo boas práticas
    this._renderer.setStyle(this._elementeRef.nativeElement, 'backgroun-color', 'yellow')
  }

}
