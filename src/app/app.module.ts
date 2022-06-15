import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardModule } from "./card/card.module";
import { CardComponent } from './card/card.component';
import { DataService } from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
