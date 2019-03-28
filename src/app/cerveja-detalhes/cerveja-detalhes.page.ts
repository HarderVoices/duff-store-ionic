import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cerveja-detalhes',
  templateUrl: './cerveja-detalhes.page.html',
  styleUrls: ['./cerveja-detalhes.page.scss'],
})
export class CervejaDetalhesPage implements OnInit {
    nome;
    detalhes;
  constructor() { 
    this.nome = "Heineken";
    this.detalhes = "Lager beer, Premium Quality";
  }
  ngOnInit() {
  }

}
