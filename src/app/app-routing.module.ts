import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {AboutmeComponent} from "./components/aboutme/aboutme.component";
import {ContactmeComponent} from "./components/contactme/contactme.component";
import {IndexComponent} from "./components/index/index.component";
import {ProjetosComponent} from "./components/projetos/projetos.component";

const routes: Routes = [
  { path: 'sobre', component: AboutmeComponent },
  { path: 'contato', component: ContactmeComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'index', component: IndexComponent },
  { path: '', component: IndexComponent },
  { path: '**', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  name:any;

  constructor(private route: ActivatedRoute,) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }
}
