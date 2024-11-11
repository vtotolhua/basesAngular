import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ingredientes } from '../../interfaces/ingredientes.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'panes-lista>',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent {

  @Output()
  public onDeleteID: EventEmitter <string> = new EventEmitter ();

  @Input()
  public ingreList: Ingredientes[] = [{
      receta: 'SalsaRojaConHuauchinango',
      cantidad:'5',
      nombreIngre: 'Jitomates1',
      modoPreparacion: 'Primero tostar los chiles, después tostar el jitomate porque suelta agua. Limpiar el chile y el jitomate, quitarles lo negro de lo tostado. Moler el chile primero con 2 dientes de ajo, agrega el jitomate y moler. Ponerle sal al gusto. Finalmente vaciar en un recipiente y agregar la cebolla picada.',
      recetaid: ''
    }];


    emmitIndex(index:number ):void {
      console.log({ index } )
     }

     OnDeleteByID(id? :string):void {
      console.log('LO QUE SE ENVÍA');
      console.log({ id });
      if ( !id ) return;
      this.onDeleteID.emit( id );
      }
    /*   OnDeleteID(index:number):void {
    console.log('LO QUE SE ENVÍA');
    console.log({ index });
    this.onDeleteID.emit(index);
    }*/

}
