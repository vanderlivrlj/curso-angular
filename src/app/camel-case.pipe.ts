import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {
  //Função que é responsável por passar o valor que vai ser mudado
  //Os argumentos, podem ser quantos necessários, vemos que com o operador Elvis,
  //Ele pode não ser obrigatório e não foi tipado.
  transform(value: any, args?: any): any {
    //Pegamos o valor e separamos as palavras pelo espaço vazio
    let values = value.split(' ');
    let result = '';

    //Estrutura para pegar cada palavra separada.
    for (let v of values){
      //Retornamos cada palavra dentro da variável result com um espaço a frente
      result += this.capitlize(v + ' ');
    }
    return result;
  }

  //Função para pegar apenas a primeira palavra e torná-la maiúscula
  //Certificando tbm que o restante permanecerá minúsculo.
  capitlize(value: string){
    return value.substring(0,1).toUpperCase() +
      value.substring(1).toLowerCase();
  }

}
