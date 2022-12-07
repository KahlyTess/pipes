import {Component, OnInit} from '@angular/core';
import { Observable } from "rxjs";
import { interval } from "rxjs";

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = [{
    titulo: 'Heathers the Musical',
    avaliacao: 4.74568,
    pag: 164,
    preco: 97.48,
    lancamento: new Date(2015, 8,1),
    url:'https://a.co/d/1biTXHv'
}];

  livros = ['Coraline', 'entrevista com vampiro'];

  filtro: any;

  addCurso(valor: string){
    this.livros.push(valor);
    console.log(this.livros);
  }

  obterLivro(){
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter((v: string) => {
      if (v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
    }
        return false;
    });
}

    valorAsync = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Valor Assíncrono'), 2000)
    });

    valorAsync2 = interval(2000).subscribe ((value: any) =>
        'Valor assíncrono 2, a volta dos que nunca foram'

    );

  constructor() { }

  ngOnInit(){

  }

}
