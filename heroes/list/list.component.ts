import { Component } from '@angular/core';

@Component({
  selector: 'app-ingredientes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public ingredientesNombres:string[]=['1/2 Jitomate', '1/4 Chiles', '2 cebollas', '2 Cabezas de ajo'];
  public ingreBorrado?:string;

  removeLastIngrediente():void{

    this.ingreBorrado = this.ingredientesNombres.pop();
  }
}
