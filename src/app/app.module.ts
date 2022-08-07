import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CounterModule } from './counters/counter.module';
import { HeroeModule } from './heroes/heroe.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CounterModule, 
    HeroeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }