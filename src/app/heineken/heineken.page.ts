import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heineken',
  templateUrl: './heineken.page.html',
  styleUrls: ['./heineken.page.scss'],
})
export class HeinekenPage implements OnInit {

  nome;
  detalhes;

  constructor() {
    this.nome = "Heineken";
    this.detalhes = "Lager beer, Premium Quality";
   }

  ngOnInit() {

  }

}
