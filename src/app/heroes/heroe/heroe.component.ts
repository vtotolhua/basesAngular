import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
public nombre: string = 'feli y mary';
public edad: number = 65;

get nombreMayusculas(): string {
  return this.nombre.toLocaleUpperCase();
}

getConcatNomEdad (): string {
  return  `${ this.nombre } - ${ this.edad }`;
}

ChangeNom ():void {
  this.nombre='Sofi e Hilaria';
 }

ChangeEdad (): void {
  this.edad=80;
 }

resetName():void {
  this.nombre= 'feli y mary';
  this.edad= 65;
}
}
