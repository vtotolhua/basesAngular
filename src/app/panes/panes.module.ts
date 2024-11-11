import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { MainPageComponent } from './pages/main-page.component';
import { ListaComponent } from './components/lista/lista.component';
import { AgregaIngreComponent } from './components/agrega-ingre/agrega-ingre.component';



@NgModule({

  imports: [
    CommonModule,
    FormsModule
  ],

  declarations: [
    MainPageComponent,
    ListaComponent,
    AgregaIngreComponent
  ],

  exports: [
    MainPageComponent
  ]


})
export class PanesModule { }
