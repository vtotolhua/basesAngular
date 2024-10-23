import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
<p>Contador: {{counter}}</p>
<button (click)="IncrValue(+1)">+1</button>
<button (click)="ResetCount()">Reset Counter</button>
<button (click)="IncrValue(-1)">-1</button>
  `
})

export class CounterComponent {

  public counter: number = 10;

  IncrValue(value:number):void {
    this.counter+= value;
  }
  ResetCount ():void {
    this.counter=10;
  }

}
