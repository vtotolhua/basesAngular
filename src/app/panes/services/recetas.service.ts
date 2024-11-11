import { Injectable } from '@angular/core';
import { Ingredientes } from '../interfaces/ingredientes.interface';

import { v4 as uuid } from 'uuid';

console.log(uuid());

@Injectable({providedIn: 'root'})

export class RecetasService {


  public ingredientes: Ingredientes[]=[
    {
      receta: 'SalsaRojaConHuauchinango',
      cantidad:'5',
      nombreIngre: 'Jitomates',
      modoPreparacion: 'Primero tostar los chiles, después tostar el jitomate porque suelta agua. Limpiar el chile y el jitomate, quitarles lo negro de lo tostado. Moler el chile primero con 2 dientes de ajo, agrega el jitomate y moler. Ponerle sal al gusto. Finalmente vaciar en un recipiente y agregar la cebolla picada.',
      recetaid: uuid()
      },{
      receta: 'SalsaRojaConHuauchinango',
      cantidad:'3',
      nombreIngre: 'chiles huauchinango',
      modoPreparacion: 'Primero tostar los chiles, después tostar el jitomate porque suelta agua. Limpiar el chile y el jitomate, quitarles lo negro de lo tostado. Moler el chile primero con 2 dientes de ajo, agrega el jitomate y moler. Ponerle sal al gusto. Finalmente vaciar en un recipiente y agregar la cebolla picada.',
      recetaid: uuid()
      },{
      receta: 'SalsaRojaConHuauchinango',
      cantidad:'2',
      nombreIngre: 'Chiles Tabaqueros',
      modoPreparacion: 'Primero tostar los chiles, después tostar el jitomate porque suelta agua. Limpiar el chile y el jitomate, quitarles lo negro de lo tostado. Moler el chile primero con 2 dientes de ajo, agrega el jitomate y moler. Ponerle sal al gusto. Finalmente vaciar en un recipiente y agregar la cebolla picada.',
      recetaid: uuid()
    }
   ];

   onNewIngrediente( agregaIngre : Ingredientes ):void {

    const newIngrediente: Ingredientes = { ...agregaIngre, recetaid: uuid() }
    this.ingredientes.push(newIngrediente);

    /*
    console.log("MainPage");/*no lleva this.ingredientes
    console.log(agregaIngre);
    this.ingredientes.push(agregaIngre);*/

   }

   DeleteIngrebyD (id:string){
    this.ingredientes = this.ingredientes.filter ( ingrediente => ingrediente.recetaid != id)
   }
   /*onDeleteID (index:number):void {
    console.log("ON DELETE RECIBIDO EN MAINPAGE");
    console.log(index);
    this.ingredientes.splice(index, 1)
   }*/


}
