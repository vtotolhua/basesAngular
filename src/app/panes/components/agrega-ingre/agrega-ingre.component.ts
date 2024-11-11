import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredientes } from '../../interfaces/ingredientes.interface';

@Component({
  selector: 'panes-agrega-Ingre',
  templateUrl: './agrega-ingre.component.html'
})


export class AgregaIngreComponent {

  @Output()
  public onNewIngrediente: EventEmitter <Ingredientes> = new EventEmitter ();


  public agregaIngrediente: Ingredientes = {
    receta : '' ,
    cantidad: '',
    nombreIngre: '',
    modoPreparacion: ''
  }

  recibirIngredientes():void{
    console.log("Agrega component");
    console.log(this.agregaIngrediente);

        if ( this.agregaIngrediente.cantidad.length === 0) return;
        if ( this.agregaIngrediente.nombreIngre.length === 0) return;
        if ( this.agregaIngrediente.receta.length === 0) return;

    this.onNewIngrediente.emit(this.agregaIngrediente);
        this.agregaIngrediente.cantidad = '';
        this.agregaIngrediente.nombreIngre = '';
        this.agregaIngrediente.receta = '';

  }
}
