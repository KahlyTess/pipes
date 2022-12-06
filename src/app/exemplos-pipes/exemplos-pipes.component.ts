import {Component, OnInit} from '@angular/core';

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

  v: any;

  addCurso(valor: string){
    this.livros.push(valor);
    console.log(this.livros)
  }

  constructor() { }

  ngOnInit(){

  }

}
