import { ListComponent } from './list/list.component';
import { HeroeComponent } from './heroe/heroe.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule ({
   imports:[
    CommonModule
  ],
    declarations: [ HeroeComponent, ListComponent ],
    exports:[ HeroeComponent, ListComponent]
  })

    export class HeroesModule { }
