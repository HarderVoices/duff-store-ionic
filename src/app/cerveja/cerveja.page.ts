import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cerveja',
  templateUrl: './cerveja.page.html',
  styleUrls: ['./cerveja.page.scss'],
})
export class CervejaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.mensagem = 'Vazio'
  }

  salvar(form) {
    const cervejaString = JSON.stringify(form.value)
    const nome = form.value
    sessionStorage.setItem(nome, cervejaString)

    form.reset()
    this.mensagem = 'Cadastrado com sucesso'
  }
}
