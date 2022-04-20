import {Component, DoCheck, OnInit} from '@angular/core';
import {CustomthemeService} from "../../shared/service/customtheme.service";
import {Imodels} from "./imodels";

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit, DoCheck {
  bgtheme: string = "";
  texttheme: string = "";
  ptheme: number = 0;
  customthemeservice: CustomthemeService;
  filtroAtivo: string = "";
  withoutFiltro:boolean = true;
  projetos: Imodels[] = [];

  constructor(customthemeservice: CustomthemeService) {
    this.customthemeservice = customthemeservice;
    this.setTheme();

  }

  ngOnInit(): void {
    this.setTheme();
    this.projetos = [
      {
        id: 1,
        nome: "Julie",
        descricao: "Projeto de Assistente Virtual para automação residencial utilizando Arduino/Raspberry. Utiliza API's de Speech Recognition e Text-To-Speech para possibilitar uma interação melhor com o Software.",
        estado: "Em Andamento",
        isPublico: false,
        isPessoal: true,
        linguagem: ["Java"]
      },
      {
        id: 2,
        nome: "My Introduction",
        descricao: "Portifólio de apresentação pessoal e profissional utilizando conceitos bases de Angular. Também utilizo o framework Bootstrap.",
        estado: "Em andamento",
        isPublico: true,
        isPessoal: true,
        linguagem: ["Angular"]
      },
      {
        id: 3,
        nome: "Spring Boot API",
        descricao: "Projeto realizado para finalização de Bootcamp em Spring Boot. Utiliza tecnologias como Spring Boot, Swagger e JUnit.",
        estado: "Finalizado",
        isPublico: true,
        isPessoal: true,
        linguagem: ["Java", "Backend"]
      },
    ];
  }

  ngDoCheck(): void {
    this.setTheme();
  }

  setTheme() {
    this.bgtheme = this.customthemeservice.btheme;
    this.texttheme = this.customthemeservice.ttheme;
    this.ptheme = this.customthemeservice.ptheme;
  }

  trocarFiltro(nome: string) {
    if (nome == "All") {
      this.withoutFiltro = true;
    } else {
      this.withoutFiltro = false;
      this.filtroAtivo = nome;
    }
  }

  getProjetosFiltro(projeto: Imodels) {
    return projeto.linguagem.includes(this.filtroAtivo);
  }

}
