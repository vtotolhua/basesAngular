import { Ingredientes } from '../interfaces/ingredientes.interface';
import { RecetasService } from './../services/recetas.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-panes-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor ( private recetasService: RecetasService ) {}

  get  ingrediente() : Ingredientes [] {
    return [...this.recetasService.ingredientes]
  }

  onDeleteID (id : string ): void {
    this.recetasService.DeleteIngrebyD( id );
  }

  onNewIngrediente (ingrediente: Ingredientes): void {
    this.recetasService.onNewIngrediente ( ingrediente );
  }

}

