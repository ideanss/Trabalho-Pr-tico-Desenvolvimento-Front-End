import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
  
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Aprendendo Angular',
      resumo: 'Introdução ao Angular.',
      autores: ['Esclavis Silva', 'João Carlos']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'TypeScript Essencial',
      resumo: 'Tudo que você precisa saber sobre TS.',
      autores: ['Maria Helena']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'JavaScript Moderno',
      resumo: 'Domine o JS da atualidade.',
      autores: ['Carlos Lima', 'Fernanda Souza']
    }
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maiorCodigo = Math.max(...this.livros.map(l => l.codigo));
    livro.codigo = maiorCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
