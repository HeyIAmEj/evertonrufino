import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";

import { CollapseModule } from "ngx-bootstrap/collapse";
import { ModalModule } from "ngx-bootstrap/modal";
import {FormsModule} from "@angular/forms";
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import { IndexComponent } from './components/index/index.component';
import {MobilemenuComponent} from "./shared/mobilemenu/mobilemenu.component";
import { ProjetosComponent } from './components/projetos/projetos.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ContactmeComponent,
    IndexComponent,
    MobilemenuComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
