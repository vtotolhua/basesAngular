import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesModule } from './heroes/heroes.module';
import { PanesModule } from './panes/panes.module';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    PanesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
